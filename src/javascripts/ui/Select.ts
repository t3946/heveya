import $ from "jquery";
import "@selectize/selectize";

$(() => {
  $('.baseSelect').each((i, e) => {
    const $select = $(e);

    if ($select.prop("multiple")) {
      $select.selectize({
        plugins: ["remove_button"],
      });
    } else {
      $select.selectize();
    }
  })
});
