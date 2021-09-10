$(function () {

    //pc버전 sns 마우스 오버 효과
    $('.photo ul li').hover(function () {


        $(this).find('span').addClass('active');

    });

    $('.photo ul li').mouseleave(function () {

        $(this).find('span').removeClass('active');


    });

    var tabClose = $('.close_btn');
    var tabBg = $('.tab_bg');



    $('.mo_navi').click(function (e) {
        e.preventDefault();
        $('.tab_menu').animate({
            left: 0
        }, 350);
        
        $('.tab_bg').fadeIn(350);
    });
    
    $('.close_btn').click(function(e){
        e.preventDefault();
        $('.tab_menu').animate({
            left: '-'+100+'%'
        }, 350);
        
        $('.tab_bg').fadeOut(350);
    });
    
    
    $('.tab_menu>.tab_wrap nav >ul > li > a').click(function(e){
        
        e.preventDefault();
        
        $(this).toggleClass('on');
        $(this).next('.sub').slideToggle(350);
        
    })
    
    


});