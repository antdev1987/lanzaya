$('.team__caraousel').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$('team__caraousel').hover(
  function () {
    $(this).slick('slickPause');
  },
  function () {
    $(this).slick('slickPlay');
  }
);
