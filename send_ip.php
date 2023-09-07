<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ipv4 = $_POST['ipv4'];
    $ipv6 = $_POST['ipv6'];

    $to = 'davi.mogrovejo@gmail.com';
    $subject = 'New IP Addresses';
    $message = "IPv4 Address: $ipv4\nIPv6 Address: $ipv6";

    mail($to, $subject, $message);
}
?>
