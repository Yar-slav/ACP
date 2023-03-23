$(document).ready(function () {
  $('.header_burger').click(function (event) {
    $('.header, .header_burger, .header_menu, .header_logo, .icon, .consultation').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

function closeBurgerMenu() {
  var burgerMenu = document.querySelector('.header_burger.active');

  burgerMenu.classList.remove("active");
  $('.header_menu, .header_logo, .icon').removeClass('active');
  $('body').removeClass('lock');
}

$('.header-link').click(function () {
  closeBurgerMenu();
});