import $ from "jquery";
import Cookies from 'js-cookie';

$(() => {
  $(".catalogToggleView").each((i, e) => {
    const $catalog = $(e);

    $catalog.on("click", ".mode_tiles", () => {
      Cookies.set('catalogView', 'tiles')
    });

    $catalog.on("click", ".mode_lines", () => {
      Cookies.set('catalogView', 'lines')
    });
  })
});
