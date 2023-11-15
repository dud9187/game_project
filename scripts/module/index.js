$(function(){
  // 헤더
  $("nav > ul > li > a").mouseover(function(){            
      $(this).next('.sub_menu').stop().slideDown(300);         
    });           
  $("nav > ul > li > a").mouseleave(function(){                     
        $(this).next('.sub_menu').stop().slideUp(300);         
      });

      // 전체메뉴리스트
      $("nav .all_btn").click(function(){            
        $(this).parents('article').next(".all-menu").css("display","block");         
      });           
      $(".all-menu .close").click(function(){            
        $(this).parents('.all-menu').css("display","none");         
      });  
      
      
  //태블릿,모바일 전체메뉴

  
  $(window).resize(function() {
    if($(window).width() < 1024) {
      $('.all-menu .menu_list .part .tit').click(function(){
          if($(this).hasClass('on') == true){
              $(this).removeClass('on');
              $(this).next('ul').stop().slideUp();
          }else{
              $('.all-menu .menu_list .part .tit').removeClass('on')
              $('.all-menu .menu_list .part .mo_sub_menu').slideUp();
              $(this).addClass('on');
              $(this).next('ul').stop().slideDown();
          }
      });
    } else {
    }
  }).resize(); 

  // 메인 슬라이드
    var mainswiper = new Swiper(".main_swiper", {
      pagination: {
        el: ".pagination",
        type: "fraction",
            clickable: true,
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        loop : true, 
        loopAdditionalSlides : 1,
        speed : 1000,
    });
    var pageswiper = new Swiper(".main_swiper", {
      pagination: {
        el: ".progress",
        type: "progressbar"
      },
    });

  mainswiper.controller.control = pageswiper; 

     // 스와이퍼 재생 정지 버튼
    $(".playpause button").click(function(){
        if (mainswiper.autoplay.running) {
            // 스와이퍼 정지
            mainswiper.autoplay.stop();
            $(".play").css('display','block');
            $(".stop").css('display','none');
        } else {
            // 스와이퍼 재생
            mainswiper.autoplay.start();
            $(".play").css('display','none');
            $(".stop").css('display','block');
        }
    })


  // 커리큘럼슬라이드 
    var swiper = new Swiper(".curri_slide", {
      slidesPerView : 'auto', 
      spaceBetween: 25, 
      loop : true,
      navigation: {
        nextEl: ".curri_next",
        prevEl: ".curri_prev",
      },
       breakpoints: { //반응형
 	  	 // 화면의 넓이가 320px 이상일 때
        320: {
          slidesPerView: '2.5',
          spaceBetween: 20
        },
        720: {
          slidesPerView: 'auto',
          spaceBetween: 25,
          }
  	  }
    });
    
});