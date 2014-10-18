$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '',
        pager: false,
        prevText: ''
    });

    $('.header-slider').bxSlider({
        mode: 'fade',
        nextSelector: '#header-slider-next',
        prevSelector: '#header-slider-prev',
        nextText: '',
        pager: false,
        //auto: true,
        prevText: ''
    });

    $(function(){
        $('#Container').mixItUp();
    });
});
