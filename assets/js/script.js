$(document).ready(function() {

 $(".subheader").click(function () {
     if ($(".subheader").hasClass("subheader-active")) {
      $(".subheader").removeClass("subheader-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".middle").removeClass("middle-active");
      $(".header").removeClass("header-active");
     } else {
      $(".subheader").addClass("subheader-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".middle").addClass("middle-active");
      $(".header").addClass("header-active");
      }
    });



$("h8").click(function() {
       if ($(".subheader").hasClass("subheader-active")) {
      $(".subheader").removeClass("subheader-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".middle").removeClass("middle-active");
      $(".header").removeClass("header-active");
     }
});

$(".subheader").hover(function() {
	$(".arrow-left").fadeIn();
}, function() {
	$(".arrow-left").fadeOut();
});


$(".classpic").click(function() {
$(this).toggleClass("classpic-long");
});  


$(".albumphoto").click(function(){
  $(this).toggleClass("albumphoto-large");
});


});
