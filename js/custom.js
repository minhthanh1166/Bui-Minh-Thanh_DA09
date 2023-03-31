$(document).ready(function(){
    $('.lang-active').click(function(){
        $(this).siblings('ul').slideToggle();
    });
    $('.back-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
    $('.banner-slide ul').lightSlider({
        item:1,
        loop:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        slideMargin:0,
        pause:3000,
        pager:false
    });  
    $('.food-res .slide ul').lightSlider({
        item:1,
        loop:true,
        mode:'fade',
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        slideMargin:0,
        pause:3000,
        pager:false
    });  
    $('.orther-say ul').lightSlider({
        item:2,
        loop:true,
        auto:true,
        slideMove:1,
        slideMargin:20,
        pager:false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pause:3000,
        responsive : [
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:15,
                  }
            }
        ]
    });    
    $('.accom-nav .slide ul').lightSlider({
        item:4,
        loop:true,
        auto:false,
        slideMove:1,
        slideMargin:10,
        pager:false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:1200,
                settings: {
                    item:3,
                    slideMove:1,
                  }
            },
            {
                breakpoint:992,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });    
    $('.images-detail-k .slide .slide-ctmd ul').lightSlider({
        item:3,
        loop:false,
        auto:false,
        slideMove:1,
        slideMargin:10,
        pager:false,
        controls:false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600
    });  
    if($(window).width() > 767){
        $('.nav-slide-service ul').lightSlider({
            item:4,
            loop:false,
            auto:false,
            slideMove:1,
            slideMargin:25,
            pager:false,
            controls:true,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            responsive : [
                {
                    breakpoint:992,
                    settings: {
                        item:3,
                        slideMove:1,
                        slideMargin:20,
                      }
                }
            ]
        });  
    }
    else if($(window).width() < 768){
        var id = 0;
        $('.nav-slide-service ul').lightSlider({
            item:1,
            loop:false,
            auto:false,
            slideMove:1,
            slideMargin:25,
            pager:false,
            controls:true,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            onAfterSlide: function (el) {
                id = $('.nav-slide-service ul .lslide.active').attr('data-id');
                $('.content-service .item').removeClass('active');
                $('.content-service .item[data-id=' + id + ']').addClass('active');
            }
        });  
    }
    if($(window).width() < 1200){
        $('.list-intro ul').lightSlider({
            item:2,
            loop:true,
            auto:false,
            slideMove:1,
            slideMargin:24,
            pager:false,
            controls:true,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            responsive : [
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1,
                        slideMargin:6,
                      }
                }
            ]
        });  
        if($(window).width() < 992){
            $('.list-other ul').lightSlider({
                item:3,
                loop:true,
                auto:false,
                slideMove:1,
                slideMargin:0,
                pager:false,
                controls:true,
                easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                speed:600,
                responsive : [
                    {
                        breakpoint:480,
                        settings: {
                            item:2,
                            slideMove:1,
                          }
                    }
                ]
            });  
            $('.list-news ul').lightSlider({
                item:2,
                loop:true,
                auto:false,
                slideMove:1,
                slideMargin:0,
                pager:false,
                controls:true,
                easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                speed:600,
                responsive : [
                    {
                        breakpoint:480,
                        settings: {
                            item:1,
                            slideMove:1,
                            slideMargin:6,
                          }
                    }
                ]
            });  
        }
        $('#touch-open').click(function(){
            $('#sticker>ul').slideToggle();
        });
    }
    $(document).ready(function(){
        var id = 0;
        $('.images-detail-k .slide .slide-ctmd ul li').click(function(){
          id = $(this).data('id');
          $(this).addClass('active-k');
          $(this).siblings('li').removeClass('active-k');
          $('.images-detail-k .content-slide .item').removeClass('active');
          $('.images-detail-k .content-slide .item[data-id='+id+']').addClass('active')
        });
        $('.accom-nav ul li').click(function(){
            id = $(this).data('id');
            $(this).addClass('active-k');
            $(this).siblings('li').removeClass('active-k');
            $('.accom-content .item').removeClass('active');
            $('.accom-content .item[data-id='+id+']').addClass('active')
          });
          $('.nav-slide-service ul li').click(function(){
            id = $(this).data('id');
            $(this).addClass('active-k');
            $(this).siblings('li').removeClass('active-k');
            $('.content-service .item').removeClass('active');
            $('.content-service .item[data-id='+id+']').addClass('active')
          });
      });
      $(document).ready(function(){$("input.date-time").datepicker({dateFormat: 'dd/mm/yy' });});
});