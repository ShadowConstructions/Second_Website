$(document).ready(function(){

$('.product-slider').owlCarousel({
loop:true,
margin: 10,
nav: true,
items: 3,
autoplay:true,
autoplayHoverPause:true,
center: true,
responsive:{
    0:{
        items:1,
        nav:true
    },
    550:{
        items:2
    },
    1000:{
        items:3
    }
}
});

$('.review-slider').owlCarousel({
    loop:true,
    nav: true,
    items: 1,
    autoplay:true
});
});