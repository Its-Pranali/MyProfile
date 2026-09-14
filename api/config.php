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
    'smtp_host'     => 'smtp.gmail.com',
    'smtp_port'     => 587,
    'smtp_secure'   => 'tls', // 'tls' or 'ssl'
    'smtp_auth'     => true,
    'smtp_user'     => 'pranalinikam1000@gmail.com', // Your Gmail address
    'smtp_pass'     => 'YOUR_GMAIL_APP_PASSWORD',    // Your 16-character Gmail App Password
    'to_email'      => 'pranalinikam1000@gmail.com', // Recipient email address
    'to_name'       => 'Pranali Nikam',
];
