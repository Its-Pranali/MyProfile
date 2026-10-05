<?php
/**
 * SMTP Configuration
 * Configure your SMTP email settings here.
 * For Gmail:
 * 1. Go to your Google Account -> Security -> 2-Step Verification -> App Passwords
 * 2. Generate a new App Password for "Mail" (16 letters, e.g. "abcd efgh ijkl mnop")
 * 3. Put it in 'smtp_pass' below without spaces.
 */
return [
    // SMTP Configuration
    // Note: For Gmail, you must use a 16-character Google App Password (not your normal Gmail password)
    // Generate one at: https://myaccount.google.com/apppasswords
    'smtp_host'   => 'smtp.gmail.com',
    'smtp_port'   => 587,
    'smtp_secure' => 'tls', // 'tls' or 'ssl'
    'smtp_auth'   => true,
    'smtp_user'   => 'pranalinikam1000@gmail.com',
    'smtp_pass'   => 'Pranali@1809', // Replace with your 16-letter Gmail App Password
    'to_email'    => 'pranalinikam1000@gmail.com',
    'to_name'     => 'Pranali Nikam',

    // MySQL Database Configuration
    'db_enabled'  => true,
    'db_host'     => '127.0.0.1',
    'db_port'     => 3307,           // Port 3307 for your XAMPP MySQL
    'db_name'     => 'profile',        // Database name in MySQL
    'db_table'    => 'contacts',       // Table name
    'db_user'     => 'root',
    'db_pass'     => '',
];
