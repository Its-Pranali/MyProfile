<?php
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

// Check if credentials are still placeholder
if ($config['smtp_pass'] === 'YOUR_GMAIL_APP_PASSWORD') {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'SMTP password not configured yet. Please open api/config.php and add your Gmail App Password.'
    ]);
    exit();
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = $config['smtp_auth'];
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    
    if (isset($config['smtp_secure']) && strtolower($config['smtp_secure']) === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }
    $mail->Port       = $config['smtp_port'];
    $mail->CharSet    = 'UTF-8';

    // Recipients
    $mail->setFrom($config['smtp_user'], $name);
    $mail->addAddress($config['to_email'], $config['to_name']);
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;

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
        <p style='font-size: 12px; color: #64748b; margin-top: 25px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;'>
            Sent from Pranali Nikam Portfolio Website Contact Form
        </p>
    </div>
    ";

    $mail->Body    = $htmlBody;
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nSubject: {$subject}\n\nMessage:\n{$message}";

    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo
    ]);
}
