$(function () {

    var topBtn = $('#top');


    /*top버튼 스크롤 탑*/

    topBtn.click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            
            scrollTop: 0
        }, 500);

    });

    /*top버튼 스크롤 탑*/
    
    
    
    //스크롤 이동시 top버튼 작동코드

    $(window).scroll(function () {

        if ( $('html, body').scrollTop() == 0) {

            topBtn.fadeOut(500);
            
        } else {
            
            topBtn.fadeIn(500);
        }
    });

    //스크롤 이동시 top버튼 작동코드




});