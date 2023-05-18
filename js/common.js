//reload
$(document).ready(function(e){
    history.scrollRestoration = "manual";
});

//ENG
$(document).ready(function(){
    $('.topNav li .engClick').click(function(e){
        e.preventDefault();
        alert('준비중입니다.');
    });
});

//panelIcon
$(document).ready(function(){
    $('.panelIcon a').click(function(){
        $(this).toggleClass('active');	
        $('.gnb, .topNav').toggleClass('active');

        var has = $(this).hasClass('active');

        if(!has){
            $('body').css('overflow','visible');
            $(this).addClass('on');
        }else{
            $('body').css('overflow','hidden');
            $(this).removeClass('on');
        }
    });
    $(window).resize(function(){
		$('.gnb, .topNav, .panelIcon a').removeClass('active');
    });
    $(window).trigger('resize');
});

//languageBox
$(document).ready(function(){
	var btn = '.topList li.last a';
	$(btn).click(function(){
		var check = $(this).parent().find('.languageBox');
		
		if(check.is(":visible")){
			$(this).removeClass('active');
			$(this).parent().find('.languageBox').stop().slideUp();
		}else{
			$(this).addClass('active');
			$(this).parent().find('.languageBox').stop().slideDown();
		}
	});
});

//topBtn
$(document).ready(function(){
    $().UItoTop({
        easingType: 'easeOutQuart',
        scrollSpeed: 1000
    });
    
    $(window).scroll(function(){
        var h = $(document).height();
        var footerHeigth = $('footer').outerHeight();
        var spot = h - footerHeigth - $(window).height();
        var dot = $(window).scrollTop();
        var w = window.innerWidth;
        if(w > 767){
            if(dot >= spot){
                $('#toTop').css({
                    position: 'absolute',
                    bottom : footerHeigth
                });
            }else{
                $('#toTop').css({
                    position: 'fixed',
                    bottom : 0
                });
            }    
        }else if(w <= 767){
            $('#toTop').css({
                position: 'absolute',
                bottom : 25
            });  
        }
    }); 
    
    $(window).resize(function(){
        $(window).trigger('scroll');  
    });
    
    $(window).trigger('scroll');
});