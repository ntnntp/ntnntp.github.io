$(window).scroll(function(){
    var sDist = 20;
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > sDist);
    $('.nav-nuttapong').toggleClass('scrolled', $(this).scrollTop() > sDist);
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > sDist);
    $('.navburger').toggleClass('scrolled', $(this).scrollTop() > sDist);
});
