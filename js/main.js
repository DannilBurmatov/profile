$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".projects-pagination",
      bulletClass: "projects-bullet",
      bulletActiveClass: "projects-bullet-active",
      clickable: true,
    },
  });
  $(function () {
    $(".input__phone").mask("+7(999) 999-99-99", {});
  });
  $(".form").each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Введите имя",
          minlength: "Имя должно состоять не менее чем из 2-ух букв",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Введите ваш телефон",
          minlength: "Номер должен состоять из 10-ти цифр"
        },
        newsEmail: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    })
  });
});
