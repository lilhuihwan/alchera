$(document).ready(function () {
  //햄버거 네비게이션
  $(".m_gnb>ul>li").on({
    mouseenter: function () {
      $(this).find(".sub_menu").stop().slideDown(700);
    },
    mouseleave: function () {
      $(this).find(".sub_menu").stop().slideUp(700);
    },
    focusin: function () {
      $(this).find("sub_menu").stop().slideDown(700);
    },
    focusout: function () {
      $(this).find("sub_menu").stop().slideUp(700);
    },
  });
  slideNum = 0;
  $(".hamberger").click(function () {
    slideNum++;
    if (slideNum % 2 == 1) {
      $("#m_header").css("right", "0px");
    } else {
      $("#m_header").css("right", "-300px");
    }
  });

  $(".gnb").on({
    mouseenter: function () {
      $(".gnb_menu_wrap").stop().slideDown(500);
    },
    mouseleave: function () {
      $(".gnb_menu_wrap").stop().slideUp(500);
    },
    focusin: function () {
      $(".gnb_menu_wrap").stop().slideDown(500);
    },
    focusout: function () {
      $(".gnb_menu_wrap").stop().slideUp(500);
    },
  });

  $(".gnb_menu_wrap").on({
    mouseenter: function () {
      $(".gnb_menu_wrap").stop().slideDown(500);
    },
    mouseleave: function () {
      $(".gnb_menu_wrap").stop().slideUp(500);
    },
    focusin: function () {
      $(".gnb_menu_wrap").stop().slideDown(500);
    },
    focusout: function () {
      $(".gnb_menu_wrap").stop().slideUp(500);
    },
  });
});
