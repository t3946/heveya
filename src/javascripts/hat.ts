import $ from "jquery";

const searchMenu = {
  $bgSearchMenu: null,
  $searchMenu: null,
  $hat: null,
  $body: null,

  show() {
    if (searchMenu.$bgSearchMenu.hasClass("searchMenuBackground_active")) {
      searchMenu.hide();
      return;
    }

    searchMenu.$searchMenu.show();
    searchMenu.$bgSearchMenu.addClass("searchMenuBackground_active");
    searchMenu.$body.css("overflow", "hidden");
  },

  hide() {
    searchMenu.$searchMenu.hide();
    searchMenu.$bgSearchMenu.removeClass("searchMenuBackground_active");
    searchMenu.$body.css("overflow", "");
  },

  init() {
    searchMenu.$bgSearchMenu = $(".searchMenuBackground");
    searchMenu.$searchMenu = $(".searchMenu");
    searchMenu.$hat = $(".hat");
    searchMenu.$body = $(document.body);

    $(".searchButton").on("click", (e) => {
      e.stopPropagation();
      searchMenu.show();
      mobileSidebarMenu.hide();
    });

    searchMenu.$bgSearchMenu.on("click", () => {
      searchMenu.hide();
      mobileSidebarMenu.hide();
    });

    searchMenu.$hat.on("click", () => {
      searchMenu.hide();
      mobileSidebarMenu.hide();
    });

    function resizeMenu() {
      let hatHeight = 100;

      if (window.innerWidth >= 768) {
        hatHeight = 131;
      }

      if (window.innerWidth >= 992) {
        hatHeight = 134;
      }

      const height = window.innerHeight - hatHeight;

      searchMenu.$searchMenu.css("height", `${height}px`);
    }

    let throttleTimeout = null;

    $(window).on("resize", () => {
      clearTimeout(throttleTimeout);
      throttleTimeout = setTimeout(resizeMenu, 100);
    });

    resizeMenu();
  }
}

const mobileSidebarMenu = {
  $body: null,
  $bgMobileMenu: null,
  $sidebarMenu: null,

  show() {
    mobileSidebarMenu.$bgMobileMenu.addClass("sidebarMenuBackground_active");
    $("body").css({overflow: "hidden"});
    mobileSidebarMenu.$sidebarMenu.show();
  },

  hide() {
    mobileSidebarMenu.$bgMobileMenu.removeClass("sidebarMenuBackground_active");
    mobileSidebarMenu.$body.css("overflow", "");
    mobileSidebarMenu.$sidebarMenu.hide();
  },

  init() {
    mobileSidebarMenu.$body = $(document.body);
    mobileSidebarMenu.$bgMobileMenu = $(".sidebarMenuBackground");
    mobileSidebarMenu.$sidebarMenu = $(".sidebarMenu");

    $(".openMenuButton").on("click", (e) => {
      e.stopPropagation();
      mobileSidebarMenu.show();
      searchMenu.hide();
    });

    mobileSidebarMenu.$bgMobileMenu.on("click", () => {
      mobileSidebarMenu.hide();
      searchMenu.hide();
    });

    const $closeMenuButton = mobileSidebarMenu.$sidebarMenu.find(".closeButton");

    $closeMenuButton.on("click", () => {
      mobileSidebarMenu.hide();
      searchMenu.hide();
    });
  }
}

$(() => {
  searchMenu.init();
  mobileSidebarMenu.init();
});