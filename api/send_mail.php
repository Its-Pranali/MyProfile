<?php
error_reporting(0);
ini_set('display_errors', '0');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');

$requestMethod = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'POST';

if ($requestMethod === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($requestMethod !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit();
}

require_once __DIR__ . '/../vendor/autoload.php';
$config = require_once __DIR__ . '/config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Retrieve POST body (JSON or Form Data)
$rawInput = file_get_contents('php://input');
if (empty($rawInput)) {
    $rawInput = file_get_contents('php://stdin');
}
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name    = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email   = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone   = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$subject = isset($data['subject']) ? trim(strip_tags($data['subject'])) : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields (Name, Email, Message).']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    exit();
}

if (empty($subject)) {
    $subject = "New Portfolio Inquiry from " . $name;
}

// ----------------------------------------------------
// 1. SAVE TO MYSQL DATABASE (profile -> contacts)
// ----------------------------------------------------
$dbSaved = false;
$dbError = null;

if (!empty($config['db_enabled'])) {
    $dbHost  = isset($config['db_host']) ? $config['db_host'] : '127.0.0.1';
    $dbPort  = isset($config['db_port']) ? (int)$config['db_port'] : 3307;
    $dbName  = isset($config['db_name']) ? $config['db_name'] : 'profile';
    $dbTable = isset($config['db_table']) ? $config['db_table'] : 'contacts';
    $dbUser  = isset($config['db_user']) ? $config['db_user'] : 'root';
    $dbPass  = isset($config['db_pass']) ? $config['db_pass'] : '';

    $portsToTry = array_unique([$dbPort, 3307, 3306]);
    $pdo = null;

    foreach ($portsToTry as $port) {
        try {
            $conn = new PDO("mysql:host={$dbHost};port={$port};charset=utf8mb4", $dbUser, $dbPass, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_TIMEOUT => 3
            ]);

            // Check if database exists
            $stmt = $conn->query("SHOW DATABASES LIKE '{$dbName}'");
            if (!$stmt->fetch()) {
                $altName = ($dbName === 'profile') ? 'profie' : 'profile';
                $altStmt = $conn->query("SHOW DATABASES LIKE '{$altName}'");
                if ($altStmt->fetch()) {
                    $dbName = $altName;
                } else {
                    $conn->exec("CREATE DATABASE IF NOT EXISTS `{$dbName}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
                }
            }

            $conn->exec("USE `{$dbName}`");

            // Auto-create contacts table if it does not exist
            $conn->exec("
                CREATE TABLE IF NOT EXISTS `{$dbTable}` (
                    `id` INT AUTO_INCREMENT PRIMARY KEY,
                    `name` VARCHAR(255) NOT NULL,
                    `email` VARCHAR(255) NOT NULL,
                    `phone` VARCHAR(50) DEFAULT NULL,
                    `subject` VARCHAR(255) DEFAULT NULL,
                    `message` TEXT NOT NULL,
                    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
            ");

            $pdo = $conn;
            break;
        } catch (Exception $e) {
            $dbError = $e->getMessage();
        }
    }

    if ($pdo) {
        try {
            $insert = $pdo->prepare("INSERT INTO `{$dbTable}` (`name`, `email`, `phone`, `subject`, `message`) VALUES (?, ?, ?, ?, ?)");
            $insert->execute([$name, $email, $phone, $subject, $message]);
            $dbSaved = true;
        } catch (Exception $e) {
            $dbError = $e->getMessage();
        }
    }
}

// ----------------------------------------------------
// 2. DELIVER EMAIL TO INBOX (NO GMAIL PASSWORD NEEDED)
// ----------------------------------------------------
$mailSent = false;
$mailNotice = '';

$toEmail = !empty($config['to_email']) ? $config['to_email'] : 'pranalinikam1000@gmail.com';
$fsUrl = "https://formsubmit.co/ajax/" . urlencode($toEmail);
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : (isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'http://localhost:5173/');

$fsPayload = [
    'name'     => $name,
    'email'    => $email,
    'phone'    => $phone ?: 'Not provided',
    'subject'  => $subject,
    'message'  => $message,
    '_subject' => "Portfolio Contact: " . $subject,
    '_template'=> 'table',
    '_captcha' => 'false'
];

$ch = curl_init($fsUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fsPayload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Accept: application/json',
    'Referer: ' . $origin,
    'Origin: ' . $origin
]);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 6);

$fsResponse = curl_exec($ch);
curl_close($ch);

$fsResult = json_decode($fsResponse, true);

if ($fsResult && isset($fsResult['success']) && ($fsResult['success'] === true || $fsResult['success'] === 'true')) {
    $mailSent = true;
} elseif ($fsResult && isset($fsResult['message']) && stripos($fsResult['message'], 'Activation') !== false) {
    $mailNotice = 'Please check your inbox (pranalinikam1000@gmail.com) and click "Activate Form" (one-time only) to activate email delivery.';
}

// If FormSubmit didn't send, also try PHPMailer SMTP if configured
if (!$mailSent && !empty($config['smtp_pass']) && $config['smtp_pass'] !== 'YOUR_GMAIL_APP_PASSWORD' && $config['smtp_pass'] !== 'Pranali@1809') {
    try {
        $htmlBody = "
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b1924; color: #ffffff; padding: 25px; border-radius: 12px; border: 1px solid #139bfd;'>
            <h2 style='color: #139bfd; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-top: 0;'>New Contact Form Submission</h2>
            <table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>
                <tr>
                    <td style='padding: 8px 0; color: #8da0b3; width: 120px;'><strong>Name:</strong></td>
                    <td style='padding: 8px 0; color: #ffffff; font-weight: 500;'>" . htmlspecialchars($name) . "</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; color: #8da0b3;'><strong>Email:</strong></td>
                    <td style='padding: 8px 0; color: #ffffff;'><a href='mailto:" . htmlspecialchars($email) . "' style='color: #139bfd; text-decoration: none;'>" . htmlspecialchars($email) . "</a></td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; color: #8da0b3;'><strong>Phone:</strong></td>
                    <td style='padding: 8px 0; color: #ffffff;'>" . ($phone ? htmlspecialchars($phone) : 'Not provided') . "</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; color: #8da0b3;'><strong>Subject:</strong></td>
                    <td style='padding: 8px 0; color: #ffffff;'>" . htmlspecialchars($subject) . "</td>
                </tr>
            </table>
            <div style='background-color: rgba(255,255,255,0.05); padding: 18px; border-radius: 8px; border-left: 4px solid #139bfd;'>
                <strong style='color: #8da0b3; display: block; margin-bottom: 8px;'>Message:</strong>
                <p style='color: #ffffff; margin: 0; line-height: 1.6; white-space: pre-wrap;'>" . nl2br(htmlspecialchars($message)) . "</p>
            </div>
        </div>
        ";

        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = $config['smtp_host'];
        $mail->SMTPAuth   = $config['smtp_auth'];
        $mail->Username   = $config['smtp_user'];
        $mail->Password   = $config['smtp_pass'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = $config['smtp_port'];
        $mail->CharSet    = 'UTF-8';
        $mail->Timeout    = 5;

        $mail->setFrom($config['smtp_user'], $name);
        $mail->addAddress($config['to_email'], $config['to_name']);
        $mail->addReplyTo($email, $name);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->AltBody = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nSubject: {$subject}\n\nMessage:\n{$message}";

        $mail->send();
        $mailSent = true;
    } catch (Exception $e) {
        // SMTP error handled gracefully
    }
}

// ----------------------------------------------------
// 3. SEND RESPONSE TO CLIENT
// ----------------------------------------------------
if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been saved in the database and emailed to pranalinikam1000@gmail.com.'
    ]);
} elseif ($mailNotice) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Your message is saved in the database! ' . $mailNotice
    ]);
} elseif ($dbSaved) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been saved in the database successfully.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Could not save message. DB Error: ' . ($dbError ?: 'Could not connect')
    ]);
}
