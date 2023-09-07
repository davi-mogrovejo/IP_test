<?php
$ipAddress = $_SERVER['REMOTE_ADDR']; // Get the user's IP address

// Your email configuration
$to = 'davi.mogrovejo@gmail.com'; // Replace with your email address
$subject = 'User IP Address';
$message = 'The user\'s IP address is: ' . $ipAddress;
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
mail($to, $subject, $message, $headers);

// Redirect the user back to the webpage
header('Location: https://davi-mogrovejo.github.io/IP_test/'); // Replace with the actual URL of your webpage
?>
