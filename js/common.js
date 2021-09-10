$(function () {

    $('.product_wrapper').slick({
        infinite: true,
        arrow: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 800, //화면 사이즈 800px
                settings: {
                    arrow: false,
                }
					}
        ]
    });
    
    $('section .review .r_wrap .photo ul li').slice(0, 4).show();
    
    $('.review .r_wrap .photo .more a').click(function(e){
        e.preventDefault();

        $("section .review .r_wrap .photo ul li:hidden").slice(0, 4).fadeIn(500);

        if ($("section .review .r_wrap .photo ul li:hidden").length == 0) {

            $(this).parent('.more').css("display", "none")
        };
    });
    
    $('.review .r_wrap .m_look_btn a').click(function(e){
        
        e.preventDefault();

        $("section .review .r_wrap .photo ul li:hidden").slice(0, 4).fadeIn(500);

        if ($("section .review .r_wrap .photo ul li:hidden").length == 0) {

            $(this).parent('.m_look_btn').css("display", "none")
        };
        
    });

});