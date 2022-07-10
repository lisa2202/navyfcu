
//Don't allow page to appear in a frame.
manageFrames();

function submitCaptchaForm() {
    'use strict';
     document.Login.submit();
}


function recaptchaWorks(response){
		 verifyCaptcha();
}

function toggleMobileMenu() {
	
	if($(".mobileMenu").hasClass("displayMenu")) {
		$(".mobileMenu").removeClass("displayMenu");
		$(".pageWrap").removeClass("movePage");
		$(".fa").removeClass("fa-times");
		$(".fa").addClass("fa-bars");
	} else {
		$(".mobileMenu").addClass("displayMenu");
		$(".pageWrap").addClass("movePage");
		$(".fa").removeClass("fa-bars");
		$(".fa").addClass("fa-times");
	}
}


/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () {
    'use strict';
	
	// Generate cookie for RSA AA Adapter
	setAACookie();
	
	//close alerts banners
	$(".alert-close-button").on('click', function(e) {
		e.preventDefault();
		$(".alert").attr("style","display:none");
		$(".alert-message").attr("style","display:none");
		return false;
	});
	
	$(".mob-nav-menu").on('click', function(e){
		e.preventDefault();
		toggleMobileMenu();
	});
	
	// Set focus to the login username
	$('#Login #user').focus();
	
	$('#user').focus().click();
	
	$('#Login #signIn').bind('click', function () {
		submitCaptchaForm();
	});
	
	var login = {
		accessNumber : ($.trim($('#Login #user').val()) !== '') ? true : false,
		password : ($.trim($('#Login #password').val()) !== '') ? true : false,
		authentication : ($.trim($('#Login #authCode').val()) !== '') ? true : false
	};
	
	// Check every keypress for ENTER key.  If pressed, fire the #signIn click event
	$('#Login input').bind('keyup', function (event) {
        var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode)),
            enable = login.accessNumber && login.password;

        if (typeof captchaEnabled !== 'undefined' && captchaEnabled) {
            enable = login.accessNumber && login.password && isCaptchaSuccess;
        }

        if (keycode === 13 && enable) {
            $('#Login #signIn').click();
        }
	});
	 
	// Check to see if CAPS LOCK is on
	$('#Login #password').keypress(checkCapsLock);
    	
	function toggleSubmitLogin() {
		var enable = login.accessNumber && login.password;
		if (typeof captchaEnabled !== 'undefined' && captchaEnabled) {
			enable = login.accessNumber && login.password && isCaptchaSuccess;
		}
		if (enable) {
			$('#Login #signIn').removeAttr('disabled', 'disabled');
		} else {
			$('#Login #signIn').attr('disabled', 'disabled');
		}
	}
    
	toggleSubmitLogin();
	
	$('#Login #user').on('input propertychange', function () {
		if ($.trim($(this).val()) !== '') {
			login.accessNumber = true;
		} else {
			login.accessNumber = false;
		}
		
		toggleSubmitLogin();
	});
	
	$('#Login #password').on('input propertychange', function () {
		if ($.trim($(this).val()) !== '') {
			login.password = true;
		} else {
			login.password = false;
		}
		
		toggleSubmitLogin();
	});
	
	$('#Login #authCode').on('input propertychange', function () {
		if ($.trim($(this).val()) !== '') {
			login.authentication = true;
		} else {
			login.authentication = false;
		}
		
		toggleSubmitLogin();
	});
	
	window.verifyCaptcha = function(){  
		 isCaptchaSuccess = true;   
		 toggleSubmitLogin();
	};  
});