import $ from "jquery";

function searchMenu() {
  const $bgSearchMenu = $(".searchMenuBackground");
  const $searchMenu = $(".searchMenu");
  const $hat = $(".hat");
  const $body = $(document.body);

  function show() {
    if ($bgSearchMenu.hasClass("searchMenuBackground_active")) {
      hide();
      return;
    }

    $searchMenu.show();
    $bgSearchMenu.addClass("searchMenuBackground_active");
    $body.css("overflow", "hidden");
  }

  function hide() {
    $searchMenu.hide();
    $bgSearchMenu.removeClass("searchMenuBackground_active");
    $body.css("overflow", "");
  }

  $(".searchButton").on("click", (e) => {
    e.stopPropagation();
    show();
  });

  $bgSearchMenu.on("click", hide);
  $hat.on("click", hide);

  function resizeMenu() {
    let hatHeight = 100;

    if (window.innerWidth >= 768) {
      hatHeight = 131;
    }

    if (window.innerWidth >= 992) {
      hatHeight = 134;
    }

    const height = window.innerHeight - hatHeight;

    $searchMenu.css("height", `${height}px`);
  }

  $(window).on("resize", resizeMenu);

  resizeMenu();
}

function mobileSidebarMenu() {const $body = $(document.body);
  //mobile sidebar menu
  const $bgMobileMenu = $(".sidebarMenuBackground");
  const $sidebarMenu = $(".sidebarMenu");
  const $closeMenuButton = $sidebarMenu.find(".closeButton");

  function showMobileMenu() {
    $bgMobileMenu.addClass("sidebarMenuBackground_active");
    $("body").css({overflow: "hidden"});
    $sidebarMenu.show();
  }

  function hideMobileMenu() {
    $bgMobileMenu.removeClass("sidebarMenuBackground_active");
    $body.css("overflow", "");
    $sidebarMenu.hide();
  }

  $(".openMenuButton").on("click", (e) => {
    e.stopPropagation();
    showMobileMenu();
  });

  $bgMobileMenu.on("click", hideMobileMenu);
  $closeMenuButton.on("click", hideMobileMenu);
  $sidebarMenu
}

$(() => {
  searchMenu();
  mobileSidebarMenu();
});