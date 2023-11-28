$(function(){
    $('.faq .tbl_area .question').on('click', function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).next('tr').find('div').stop().slideUp();
            $(this).next('tr').find('div').stop().slideUp();
        }else{
            $('.faq .tbl_area .question').removeClass('on')
            $('.faq .tbl_area .answer div').slideUp();
            $(this).addClass('on');
            $(this).next('tr').find('div').stop().slideDown();
        }
    });
})