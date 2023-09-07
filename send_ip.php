<?php
$ipAddress = $_SERVER['REMOTE_ADDR']; // Get the user's IP address

// Your email configuration
$to = 'your@email.com'; // Replace with your email address
$subject = 'User IP Address';
$message = 'The user\'s IP address is: ' . $ipAddress;
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
mail($to, $subject, $message, $headers);

// Redirect the user back to the webpage
header('Location: your_webpage.html'); // Replace with the actual URL of your webpage
?>
