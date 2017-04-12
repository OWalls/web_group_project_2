$(document).ready(function() {
$('.h1menu2').on('click', function(){
//  $(this).hide();
  $(this).parent().parent().find('.other-menu').show();
  $(this).parent().parent().find('.main-menu').hide();
  //$(this).parent('.text-menu').parent('.menu-main').find('.other-menu').show();
  //$(this).parent('.text-menu').parent('.menu-main').find('.main-menu').hide();
});
$('.h1menu1').on('click', function(){
//  $(this).hide();
  $(this).parent().parent().find('.main-menu').show();
  $(this).parent().parent().find('.other-menu').hide();
  //$(this).parent('.text-menu').parent('.menu-main').find('.other-menu').show();
  //$(this).parent('.text-menu').parent('.menu-main').find('.main-menu').hide();
});
$(document).on('scroll', function(){

  if($(document).scrollTop() > 100){
  		  $('nav').addClass('shrink');
        $('.shrink').find('img').css('height', '75px');
  		}
  		else
  		{
  			$('nav').removeClass('shrink');
        $('nav').find('img').css('height', 'auto');
  		}
});

$('button').on('click', function() {
  var message = $('#txt_Name').val();
  alert("Thank you for your order " + message + "! We'll get back with you shortly!");

});


});
