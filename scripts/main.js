$(function(){
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
  var curri_slide = new Swiper(".curri_slide", {
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
})