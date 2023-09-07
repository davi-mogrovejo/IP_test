<?php
$ipAddress = $_SERVER['REMOTE_ADDR']; // Get the user's IP address

// Your email configuration
$to = 'davi.mogrovejo@gmail.com'; // Replace with your email address
$subject = 'User IP Address';
$message = 'The user\'s IP address is: ' . $ipAddress;
$headers = 'davi.mogrovejo@gmail.com' . "\r\n" .
    'Reply-To: davi.mogrovejo@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
mail($to, $subject, $message, $headers);

// Redirect the user back to the webpage
header('Location: your_webpage.html'); // Replace with the actual URL of your webpage
?>
