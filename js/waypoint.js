$(document).ready(function(){
    $('#product .list .title').waypoint(function(){
        $('#product .list .title').addClass('active');    
    },{offset: '80%'});
    $('#product .list .subTitle').waypoint(function(){
        $('#product .list .subTitle').addClass('active');    
    },{offset: '60%'});
    $('#product .list.first .info').waypoint(function(){
        $('#product .list.first .info').addClass('active');    
    },{offset: '70%'});
    $('#product .listWrap .list +.list02').waypoint(function(){
        $('#product .listWrap .list+.list02').addClass('active');    
    },{offset: '50%'});
    $('#product .listWrap .list +.list03').waypoint(function(){
        $('#product .listWrap .list+.list03').addClass('active');    
    },{offset: '60%'});
    $('#product .listWrap .list +.list04').waypoint(function(){
        $('#product .listWrap .list+.list04').addClass('active');    
    },{offset: '50%'});
    $('#product > .title').waypoint(function(){
        $('#product > .title').addClass('active');    
    },{offset: '80%'});
    $('#product > .info').waypoint(function(){
        $('#product > .info').addClass('active');    
    },{offset: '75%'});
    $('.section02').waypoint(function(){
        $('.section02').addClass('active');  
        $('.section02 ul').addClass('active'); 
    },{offset: '85%'});
    $('#bestNew .title').waypoint(function(){
        $('#bestNew .title').addClass('active');    
    },{offset: '90%'});
    $('#bestNew .info').waypoint(function(){
        $('#bestNew .info').addClass('active');    
    },{offset: '85%'});
    $('#bestNew .content_box').waypoint(function(){
        $('#bestNew .content_box').addClass('active');    
        $('#bestNew .swiper-container').addClass('active');    
    },{offset: '85%'});
    $('.sns_box .wrap').waypoint(function(){
        $('#instagram .title, #youtube .title').addClass('active'); 
        $('#instagram .swiper-container, #youtube video').addClass('active'); 
    },{offset: '90%'});
});