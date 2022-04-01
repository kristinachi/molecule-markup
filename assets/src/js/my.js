  $('.testimonials-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.testimonials-nav'
  });

  $('.testimonials-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonials-slider',
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  });