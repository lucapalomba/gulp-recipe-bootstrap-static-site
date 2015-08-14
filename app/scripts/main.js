/* jshint devel:true */
'use strict';

//loaded after the DOM loaded
$(document).ready(function() {
      

});

//loader after all the page is loaded
$(window).load(function(){ 
    
    $.getScript( 'https://nibirumail.com/docs/scripts/nibirumail.cookie.min.js');
    
     //sending mails
    $('#contacts-form').submit(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = 'Contact from your site';
        var message = $('#message').val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
        
        console.log(dataString);

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        }
        
        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: 'POST',
                url: 'sendmail.php',
                data: dataString,
                success: function () {
                    //console.log('success');
                    $('.success').removeClass('hidden');
                    $('.error').addClass('hidden');
                    $('#name').val('');$('#email').val('');$('#message').val('');
                }
            });
        }
        else {
            //console.log('error: not sent');
            $('.error').removeClass('hidden');
            $('.success').addClass('hidden');
        }
        return false;
    });
 
});