$(document).ready(function(){

    //pc버전 sns 마우스 오버 효과
    $('.photo ul li').hover(function () {


        $(this).find('span').addClass('active');

    });

    $('.photo ul li').mouseleave(function () {

        $(this).find('span').removeClass('active');


    });


    //tab_menu
    var menuclick = $('#mo_navi');
    var menuBox = $('.tab_menu');
    var menuClose = $('#close_btn');
    var menuBg = $('.tab_bg');


    menuclick.click(function (e) {
        e.preventDefault();
        menuBox.animate({
            left: 0
        }, 700);
        menuBg.fadeIn(300);

    });


    menuClose.click(function (e) {
        e.preventDefault();
        menuBox.animate({
            left: '-' + 600 + 'px'
        }, 700);
        menuBg.fadeOut(300);

    });

    //tab_menu




    //아코디언 메뉴
    //.tab_menu>.tab_wrap>nav> ul> li>a객체(주매뉴)를 저장하여라.
    var btn = $('.tab_menu>.tab_wrap>nav> ul> li>a');
    //주메뉴에 마우스 클릭 이벤트 설정
    btn.click(function (e) {
        e.preventDefault();
        //만약 주메뉴에 class 속성이 active가 아니라면
        //$(this): 클릭한 주메뉴
        //attr('class'):class속성, attribute
        //!=:비교연산자(같지않음)
        if ($(this).attr('class') != 'active') {

            //주메뉴의 형제객체(next())는 들어감
            btn.next().slideUp();

            //주메뉴의 active클래스 제거
            btn.removeClass('active');

            //클릭한 주메뉴에만 active클래스 추가
            $(this).addClass('active');

            //클릭한 주메뉴의 형제객체만 내려옴
            $(this).next().slideDown();
        }

        //if릐 조건이 거짓이라면 
        //주메뉴의 active 클래스가 설정 되어있다면 
        else {

            //클릭한 주메뉴의 active클래스 제거
            $(this).removeClass('active');

            //클릭한 주메뉴의 형제객체 들어감
            $(this).next().slideUp();
        }

    });

});