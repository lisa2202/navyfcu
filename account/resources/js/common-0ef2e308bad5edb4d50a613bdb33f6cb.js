/* Security feature: Frame Buster */
function manageFrames() {
    'use strict';
    
	if (window.self != window.top) {
		window.top.location = window.self.location;
    }
}

// Disable IE10+ feature that shows caps lock is on message
// More info: https://msdn.microsoft.com/en-us/library/jj128374(v=vs.85).aspx
/*if (document.msCapsLockWarningOff === false) {
    document.msCapsLockWarningOff = true;
}*/

function validateDay(day, month, year) {
    'use strict';
    
	if (month !== null) {
		if ((month == "3") || (month == "5") || (month == "8") || (month == "10")) {
			if (day == "31") {
                return false;
            }
		}
		
		if (month == "1") {
			if (year != null) {
				if ((parseInt(year) % 4) == 0) {
					if (parseInt(day) > 29) {
                        return false;
                    }
				} else {
					if (parseInt(day) > 28) {
                        return false;
                    }
				}
			}
		}
	}
	return true;
}

function validatePassword(userName, password) {
	'use strict';
    
	if (password.length < 8 || password.length > 16 || (password == userName) || (password.match(/[0-9]/) == null) || (password.match(/ /) != null) || (password.match(/[a-zA-Z]/) == null)) {
		return false;
	}
	
	return true;
}

function validateBirthMY(month, year, isMonthBeingValidated) {
    'use strict';
	// Validate that there is a value for the month and year drop-downs.
	// If both values are missing, will use 'isMonthBeingValidate' to determine
	// if message will be shown.  
	
	if (month == '' && year == '') {
		return isMonthBeingValidated;
	}
	
	if (month == '') {
		return isMonthBeingValidated;
	}
	
	if (year == '') {
		return isMonthBeingValidated;
	}
	
	return true;
	
}

/**
 * Clears all form fields for the given form ID or 'this.form'.
 * @param ele
 */
function clear_form_elements(ele) {
    'use strict';
    
    $(ele).find(':input').each(function () {
        switch (this.type) {
        case 'password':
        case 'select-multiple':
        case 'select-one':
        case 'text':
        case 'textarea':
            $(this).val('').trigger('change');
            break;
        case 'checkbox':
        case 'radio':
            this.checked = false;
            break;
        }
    });

}

function removeCookie(name, path, domain) {
    'use strict';
    
	var cookie = name + "=" + ((path) ? ";path=" + path : "")
							+ ((domain) ? ";domain=" + domain : "")
							+ ";expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	document.cookie = cookie;
}

function setCookie(name, value, expires, path, domain, secure) {
	'use strict';
    
	document.cookie = name + "=" + encodeURIComponent(value) +
						((expires) ? "; expires=" + expires.toGMTString() : "") +
						((path) ? "; path=" + path : "") +
						((domain) ? "; domain=" + domain : "") +
						((secure) ? "; secure" : "");
	
}

/**************
 * Following code is for displaying and handling the caps lock icon
 * that appears in certain fields if CAPS LOCK key is activated.
 */

function checkCapsLock(e) {
    'use strict';
    
	var s = String.fromCharCode(e.which);
    
    if (s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) {
        $(e.target).parent().addClass('has-capslock');
    } else {
        $(e.target).parent().removeClass('has-capslock');
    }
}
/* END CAPS LOCK CODE ****************************************************/

function validateSSN(ssn) {
    'use strict';
    
	return (ssn.length === 9);
}

/**
 * 
 */

// SiteCatalyst Code

// used typeof because firefox was failing the script due to s being undefined,
// this condition correctly checks if s is actually defined
if (typeof s !== 'undefined') {
	s.server = 'nfo';
	s.contextData['pageType'] = 'nfo';
	s.pageName = 'nfo:login';
	s.contextData['l1'] = 'nfo';
	s.contextData['l2'] = 'nfo:login';
	s.t();
}

function countModal(modalName) {
    'use strict';
    
	s.pageName = 'nfo:' + s.getPageName() + ':' + modalName;
	s.t();
}

/* Function that resized the parent facebox iframe to the height of the #uiContent*/
function resizeParentFrame() {
    'use strict';
    
    parent.$('.modal iframe').height($('body > .modal-iframe').height());
}

function alertUser(el, msg, className) {
    'use strict';
    
    // Only append once
    if (el.parent().find('.' + className).length === 0 && el.parent().next().hasClass(className) === false) {
        // if the parent is either input-group or form-group, then add the has-error on those elements
        if (el.parent().hasClass('form-group') || el.parent().hasClass('input-group')) {
            el.parent().addClass('has-error');

            if (el.parent().hasClass('input-group')) {
                el.parent().after('<p class="text-muted text-danger ' + className + '">' + msg + '</p>');
                
                return;
            }
        } else {
            el.addClass('has-error');
        }
        
        el.parent().append('<p class="text-muted text-danger ' + className + '">' + msg + '</p>');
    }
}

function removeAlert(el, className) {
    'use strict';
    
    // if the parent is either input-group or form-group, then remove the has-error from those elements
    if (el.parent().hasClass('form-group') || el.parent().hasClass('input-group')) {
        
        // Only remove if there are no other alerts remaining
        if(el.parent().find('.text-danger:not(.' + className + ')').length === 0) {
            el.parent().removeClass('has-error');
        }
        
        if (el.parent().hasClass('input-group')) {
            el.parent().next('.' + className).remove();
            
            return;
        }
    } else {
        el.removeClass('has-error');
    }
    
    el.parent().find('.' + className).remove();
}


// Function to verify security answer
function validateSecurityAnswer(el, errorSecurityAnswer, errorSecurityAnswer2) {
    'use strict';
    
    if ($.trim(el.val()).length < 2 || el.val()[0] === ' ' || $.trim(el.val()) === '') {
        alertUser(el, errorSecurityAnswer, 'err-invalidSecurityAnswer');
    } else {
        removeAlert(el, 'err-invalidSecurityAnswer');

        // Only check syntax after its known that the first check is passed
        var testRegex = /^[a-zA-Z0-9. ]*$/g;
        if (!el.val().match(testRegex)) {
            alertUser(el, errorSecurityAnswer2, 'err-invalidSecurityAnswer2');
        } else {
            removeAlert(el, 'err-invalidSecurityAnswer2');
        }
    }
}

// Disable pasting into a password field
$(document).ready(function () {
    'use strict';
    
    /*
    // Disable 'paste' and contextmenu on password fields
    $('input[type="password"]').bind('paste', function (e) {
        e.preventDefault();
    }); */
    
    // Control modals on load iframe
    $('#modalFindAccessNumber, #modalForgotPassword, #modalonlineDisclosure, #modalbrowserRequirements').on('show.bs.modal', function (e) {
        // find iframe and replace the src with data-src to prevent the iframe from loading resources on load
        $(this).find('iframe').attr('src', function () {
            return $(this).data('src');
        }).removeAttr('style');
        
    }).on('hidden.bs.modal', function () {
        $.ajax("killses");
    });
});