<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ipv4 = $_POST['ipv4'];
    $ipv6 = $_POST['ipv6'];

    $to = 'qwer_fadf@gmail.com';
    $subject = 'New IP Addresses';
    $message = "IPv4 Address: $ipv4\nIPv6 Address: $ipv6";

    if (mail($to, $subject, $message)) {
        echo 'Email sent successfully';
    } else {
        echo 'Email delivery failed';
        error_log(error_get_last()['message']); // Log the error message
    }
}
?>
