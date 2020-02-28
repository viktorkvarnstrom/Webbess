jQuery(function ($) {
    // Smooth scroll function
     $(window).scroll(function () {
         if ($(window).scrollTop() > 70) {
             $('#navBar').addClass('floatingNav');
         } else {
             $('#navBar').removeClass('floatingNav');
         }
     });
 
     // makes the dropdpwn disapear on sm divices
     $(function(){ 
         var navBar = $("#navbarText");
         navBar.on("click", "a", null, function () {
             navBar.collapse('hide');
         });
     });
 
 });
 