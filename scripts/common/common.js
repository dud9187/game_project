$(function(){
  // 헤더
  $("nav > ul > li").mouseover(function(){ 
      $(this).children('.sub_menu').stop().slideDown(300);                   
    });           
  $("nav > ul > li").mouseleave(function(){                     
      $(this).children('.sub_menu').stop().slideUp(300);             
    });
    
    $("nav .all_btn").click(function(){
        $(this).css('display','none');
    })
    $(".all-menu .close").click(function(){
      $("nav .all_btn").css('display','block');
    });
  // 해상도 1240이하일때 메뉴버튼 display : none 
    var windowWidth = $(window).width();
      if (windowWidth <= 1240) {
      }
    // 전체메뉴리스트 -pc
    $("nav .all_btn").click(function(){      
        $(this).parents('article').next(".all-menu").addClass("on");
        $('body').css('overflow','hidden');
    });           
    $(".all-menu .close").click(function(){     
      $(this).parents('.all-menu').removeClass("on");
      $('body').css('overflow','auto');
    });  

    // 전체메뉴리스트 -mo
    $(".mo_btn .mo_all_btn").click(function(){ 
      $(this).parents('article').nextAll(".mo_nav").addClass('on')                 
    });           
    $(".mo_nav .mo_close").click(function(){    
      $(this).parents('.mo_nav').removeClass('on')        
    });  
    
      
  //모바일 전체메뉴
  $('.mo_nav .mo_menu_list .part .tit').on('click', function(){
    if($(this).hasClass('on') == true){
      $(this).removeClass('on');
      $(this).next('ul').stop().slideUp();
    }else{
      $('.mo_nav .mo_menu_list .part .tit').removeClass('on')
      $('.mo_nav .mo_menu_list .part .mo_sub_menu').slideUp();
      $(this).addClass('on');
      $(this).next('ul').stop().slideDown();
      }
  });

 $(window).resize(function() {
   if($(window).width() < 790) {
      $("header .all-menu").removeClass('on');
    } else {
      $("header .mo_nav").removeClass('on');
    }
  });

  // 네비 , all메뉴 , mo_all메뉴 
    // function menuLink() {
        
    //     var menuHref = document.getElementById('shareLink').getAttribute('href');
    //     document.location.href = menuHref;
    // }
    var href = $('ul.sub_menu').find('a').prop('href');
    console.log(href);


});