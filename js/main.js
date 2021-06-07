$(document).ready(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        loop:false,
        dots:false,
        nav:false,
        mouseDrag:false,
        margin:10,
        items:1,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    })
    $('.tab_unit_js').click( function() { 
        $(this).addClass('active').siblings().removeClass('active');
    })
    
});