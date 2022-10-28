import $ from "jquery";
import "@selectize/selectize";

$(() => {
  $('.baseSelect').selectize({
    plugins: ["remove_button"],
  });
});