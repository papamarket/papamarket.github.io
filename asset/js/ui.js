/* header scroll */
$(window).scroll(function(){
    const scroll = $(window).scrollTop();
    const headerH = $("header").height();
    if (scroll >= headerH) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
});

// btn-like
$(".btn-like").click(function(){
    $(this).toggleClass("active");
});

/* gnb-menu open */
$(".btn-menu").on("click",function(){
	$("body").addClass("is-open");
	$(".gnb-menu").addClass("active").attr("aria-hidden", "false");
	$(document).on("keyup", function(evt){
		var keycode = evt.which;
		if(keycode == 27){
			$("body").removeClass("is-open");
			$(".gnb-menu").removeClass("active").attr("aria-hidden", "true");
		}
	});
});

/* gnb-menu close */
$(".btn-gnb-close").on("click",function(){
	$("body").removeClass("is-open");
	$(".gnb-menu").removeClass("active").attr("aria-hidden", "true");
});
$('.gnb-menu').click(function(e){
    if( !$('.gnb-menu').has(e.target).length ) $('.gnb-menu').removeClass('active').attr("aria-hidden", "true");
    if( !$('.gnb-menu').has(e.target).length ) $("body").removeClass("is-open");
});

/* gnb-menu > sub-menu open */
$(".gnb-menu .gnb-tit.after").click(function(e) {
    e.preventDefault();
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).next(".sub-menu").stop().slideUp();
	} else {
		$(this).addClass("active");
		$(this).next(".sub-menu").stop().slideDown();
		$(this).parent().siblings().find(".sub-menu").stop().slideUp();
		$(this).parent().siblings().find(".gnb-tit.after").removeClass("active");
	}
});

/* Swiper 변수 */
const windowWidth = $(window).width();
const m20 = 20 / 1080 * windowWidth;
const m30 = 30 / 1080 * windowWidth;
const m40 = 40 / 1080 * windowWidth;

/* gnb - 내주변 슈퍼마켓 */
const GnbaroundListSlide = new Swiper(".gnb-around-list-slide", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: m20,
    breakpoints: {
        320:  {
            slidesPerView: 3.4,
            spaceBetween: m20,
        },
        360:  {
            slidesPerView: 4,
            spaceBetween: m20,
        },
        1080:  {
            slidesPerView: 4.1452,
            spaceBetween: 30,
        }
    }
});

/* gnb - 이벤트 배너 */
const gnbBannerSlide = new Swiper(".gnb-banner-slide", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: m20,
    breakpoints: {
        360:  {
            slidesPerView: 2.028,
            spaceBetween: m20,
        },
        1080:  {
            slidesPerView: 2.028,
            spaceBetween: 20,
        }
    }
});