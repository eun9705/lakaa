//popup
$(document).ready(function(){
    function setCookie(name, value, expiredays){
        
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.popup';
    var chkbox = '#chk';
    
    $(popup).find('form .close').click(function(){
        var chk = $(chkbox).prop('checked');
        
        if(chk){
            setCookie('exCookie','done',1); 
        }
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    }
});

//main
window.onload = function(){
    $(window).resize(function(){
        var h = $(window).height();
        
        $('main').height(h);
    });
    $(window).trigger('resize');
    
    var swiper = new Swiper('main .swiper-container', {
        loop: true,
        speed : 800,
        navigation: {
            nextEl: 'main .swiper-button-next',
            prevEl: 'main .swiper-button-prev',
        },
        pagination: {
            el: 'main .swiper-pagination',
            clickable: true,
        },
        on: { //스와이퍼 이벤트처리
            init: function(){ //초기실행
                $('main .table_cell h3').addClass('active');
            },
            slideChangeTransitionStart: function(){ //슬라이드가 변경되기 시작할 때
                $('main .table_cell h3').removeClass('active');
            },
            slideChangeTransitionEnd: function(){ //슬라이더가 다 변경된 후
                $('main .table_cell h3').addClass('active');
            }
        }
    });
    
    var nextBtn = 'main .swiper-button-next svg';
    var prevBtn = 'main .swiper-button-prev svg';
    $(nextBtn).hover(function(){
        $(this).find('path').attr('d','M 10 10 Q 40 65 10 140');
        $(this).parent().find('p').css('opacity','1');
    });
    $(nextBtn).mouseleave(function(){
        $(this).find('path').attr('d','M 10 10 Q 10 65 10 140');
        $(this).parent().find('p').css('opacity','0');
    });
    $(prevBtn).hover(function(){
        $(this).find('path').attr('d','M 40 10 Q 10 65 40 140');
        $(this).parent().find('p').css('opacity','1');
    });
    $(prevBtn).mouseleave(function(){
        $(this).find('path').attr('d','M 40 10 Q 40 65 40 140');
        $(this).parent().find('p').css('opacity','0');
    });
};

/* section01_bg, section03_bg */
$(document).ready(function(){
    var scroll;
    $(window).scroll(function(){
        scroll = $(this).scrollTop();
        $('.section01 > figure, .section03 > figure').css('transform', 'translate3d(0,' + -scroll / 3 + 'px, 0');    
    });
});

/* bestNew */
$(document).ready(function(){
    var swiper = new Swiper('#bestNew .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 70,
        loop: true,
        speed : 800,
        navigation: {
            nextEl: '#bestNew .swiper-button-next',
            prevEl: '#bestNew .swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,    
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,     
            }
        }
    });
});

/* instagram */
$(document).ready(function(){
    var swiper = new Swiper('#instagram .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,  
        navigation: {
            nextEl: '#instagram .swiper-button-next',
            prevEl: '#instagram .swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,    
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,     
            }
        }
    });
});