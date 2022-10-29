import $ from "jquery";

const bootstrap = require("bootstrap");

$(() => {
  const options = {};
  const $modalLogin = $("#modalLogin");

  if (!$modalLogin.length) {
    return;
  }

  const ModalLogin = new bootstrap.Modal($modalLogin[0], options);

  $modalLogin.find(".closeButton").on("click", () => {
    ModalLogin.hide();
  })

  $(document).on("click", ".openLoginModal", () => {
    ModalLogin.show();
  })
});