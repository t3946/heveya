import Inputmask from "inputmask";
import $ from "jquery";

$(() => {
  $(".baseInputText_type_phone").each((i, e) => {
    (new Inputmask("+7 (999) 999-99-99")).mask(e);
  })
});
