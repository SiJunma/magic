

$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
    $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
    $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}


 $(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 3000);
        e.preventDefault();
        return false;
    });
});