import $ from "jquery";

const bootstrap = require("bootstrap");

$(() => {
  const options = {};
  const $modalLogin = $("#modalLogin");
  const ModalLogin = new bootstrap.Modal($modalLogin[0], options);

  $modalLogin.find(".closeButton").on("click", () => {
    console.log("click");
    ModalLogin.hide();
  })

  $(document).on("click", ".openLoginModal", () => {
    ModalLogin.show();
  })
});