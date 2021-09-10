 $(document).ready(function () {



     $('.list_slide').slick({
         infinite: true,
         arrow:true,
         dots: true,
         speed: 300,
         slidesToShow: 5,
         slidesToScroll: 4,
         responsive: [
            {
                breakpoint: 800, //화면 사이즈 800px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
					}
        ]
     });

     var mouseover = $('.best_list .list_slide .list_box .po_rel');
     var show = $('.over');

     $('.best_list .list_slide .list_box .po_rel').mouseenter(function () {
         $(this).find('.over').stop().fadeIn(200);
     });

     $('.best_list .list_slide .list_box .po_rel').mouseleave(function () {
         $(this).find('.over').stop().fadeOut(200);
     });




 });