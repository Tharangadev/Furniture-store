$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	autoplay:true,
  	animateOut: 'fadeOut',
  	lazyLoad: true,
    loop:true
  });
 
   $(".testor").owlCarousel({
  	items:1,
  	autoplay:true,
  	 loop:true,
     dots:true,
     dotsEach:1,
     autoplayTimeout:3000,
     autoplayHoverPause:true,
     autoplaySpeed:2000
  });
});