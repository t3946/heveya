import $ from "jquery";
import Tooltip from "bootstrap/js/dist/tooltip";

$(() => {
  $('[data-bs-toggle="tooltip"]').each((i, e) => {
    new Tooltip(e, {
      customClass: "baseTooltip",
      trigger: 'hover'
    });
  })
});

