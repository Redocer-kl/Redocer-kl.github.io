$(window).scroll(function() {
    var sb_m = 20; /* отступ сверху и снизу */
    var mb = 300; /* высота подвала с запасом */
    var st = $(window).scrollTop();
    var sb = $(".sticky-block");
    var sbi = $(".sticky-block .inner");
    var sb_ot = sb.offset().top;
    var sbi_ot = sbi.offset().top;
    var sb_h = sb.height();
 
    if(sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
        if(st > sb_ot) {
            var h = Math.round(st - sb_ot) + sb_m;
            sb.css({"paddingTop" : h});
        }
        else {
            sb.css({"paddingTop" : 0});
        }
    }
});