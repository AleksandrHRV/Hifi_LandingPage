$(document).ready(function(){
 $('.slider-porfolio').slick({
    arrows:true,
    dots:false,
    adaptiveHeight:true,
    slidesToShow:3,
    slidesToScroll:3,
    speed:500,
    easing:'easeInQuint',
    infinite:false,
    adaptiveHeight:true,
    appendArrows:$('.page-portfolio_buttons'),
 });
}); 

$(document).ready(function(){
    $('.reviews__slider').slick({
        arrow:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:500,
        easing:'easeInQuint',
        infinite:false,
        adaptiveHeight:true,
        appendArrows:$('.content__reviews-btns'),
    });
   }); 
