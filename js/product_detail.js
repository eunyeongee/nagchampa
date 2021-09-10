  $(document).ready(function () {

      $("#headers").load("header.html"); // 원하는 파일 경로를 삽입하면 된다

      $("#footers").load("footer.html"); // 추가 인클루드를 원할 경우 이런식으로 추가하면 된다



      //스크롤 이벤트 fixed
      $(window).scroll(function () {

          /*var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
          if (height > 0) {
              $('header,.wrap').addClass('fixed');
          } else if (height == 0) {
              $('header,.wrap').removeClass('fixed');
          }*/

      });

      $('#top').click(function () {
          $('html, body').animate({
              scrollTop: 0
          }, 800);
      });

      $('.btn_wish').click(function () {

      });

      $('.list_slide').slick({
          infinite: false,
          dots: false,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 4,
          responsive: [
              {
                  breakpoint: 800, //화면 사이즈 800px
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      arrow:false,
                  }
					}
        ]
      });


      var wish = $('.btn_wish a');

      wish.click(function (e) {
          e.preventDefault;
          wish.find('.xi-heart-o').addClass('xi-heart');
          wish.find('.xi-heart-o').removeClass('xi-heart-o');

      });
  });





  // 탭 이동
  function tabmove(no) {
      var pos = $('.product_box .tabcnt_detail' + no).offset();
      var extra_space = $('.product_box .tab_area').height();
      var duration = "400";
      $('html, body').animate({
          scrollTop: pos.top - extra_space
      }, duration);
  }



  function scroll_page() {
      var body_h = $(this).scrollTop();
      var tab_s = $('.product_box .tab_area').offset().top;
      var tab_h = $('.product_box .tab_area').height();

      if (body_h > tab_s) {
          $('.product_box .tab').addClass('fixed');
      } else {
          $('.product_box .tab').removeClass('fixed');
      }

      var section_top = new Array();
      $('.tabcnt_detail').each(function (idx) {
          section_top[idx] = Math.floor($(this).offset().top - tab_h);
      });

      $('.tab_detail li a').removeClass('active');

      if (body_h >= section_top[0] && body_h < section_top[1]) {
          $('.tab_detail li:nth-child(1) a').addClass('active');
      } else if (body_h >= section_top[1] && body_h < section_top[2]) {
          $('.tab_detail li:nth-child(2) a').addClass('active');
      } else if (body_h >= section_top[2] && body_h < section_top[3]) {
          $('.tab_detail li:nth-child(3) a').addClass('active');
      } else if (body_h >= section_top[3]) {
          $('.tab_detail li:nth-child(4) a').addClass('active');
      }
  }



  $(window).ready(function () {
      scroll_page();
  });


  $(window).scroll(function () {
      scroll_page();
  });


  $('.product_box .tab_area > .tab li a').click(function () {
      var tabmenu = $('.product_box .tab_area > .tab li a');
      var num = $('.product_box .tab_area > .tab li a').index(this);

      tabmenu.each(function (no) {

          $(this).addClass('on');

          if (no == num) {

              $(this).addClass('on');

          } else {

              $(this).removeClass('on');
          }
      });
  });