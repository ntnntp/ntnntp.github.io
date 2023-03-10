$(window).scroll(function(){
    var sDist = 20;
$('.navbar').toggleClass('scrolled', $(this).scrollTop() > sDist);
$('.nav-nuttapong').toggleClass('scrolled', $(this).scrollTop() > sDist);
$('.nav-link').toggleClass('scrolled', $(this).scrollTop() > sDist);
$('.navburger').toggleClass('scrolled', $(this).scrollTop() > sDist);
$('.nav-icon').toggleClass('scrolled', $(this).scrollTop() > sDist);
$('.navbar-lite').toggleClass('scrolled', $(this).scrollTop() > sDist);
$('.nav-nuttapong-lite').toggleClass('scrolled', $(this).scrollTop() > sDist);
$('.nav-link-lite').toggleClass('scrolled', $(this).scrollTop() > sDist);
$('.navburger-lite').toggleClass('scrolled', $(this).scrollTop() > sDist);
});