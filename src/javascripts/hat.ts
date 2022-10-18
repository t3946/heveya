import $ from "jquery";

$(() => {
  const $bg = $(".searchMenuBackground");
  const $searchForm = $(".hatSearchForm");
  const $body = $(document.body);

  function show() {
    if ($bg.hasClass("searchMenuBackground_active")) {
      hide();
    }

    $searchForm.show();
    $bg.addClass("searchMenuBackground_active")
    $body.css("overflow", "hidden");
  }

  function hide () {
    $searchForm.hide();
    $bg.removeClass("searchMenuBackground_active")
    $body.css("overflow", "scroll");
  }

  $(".searchButton").on("click", (e) => {
    e.stopPropagation();
    show();
  });

  $searchForm.on("click", (e) => {
    e.stopPropagation();
  })

  $body.on("click", hide);
});