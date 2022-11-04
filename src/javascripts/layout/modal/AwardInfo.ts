import $ from "jquery";

const bootstrap = require("bootstrap");

$(() => {
  const options = {};
  const $modalAwardInfo = $("#modalAwardInfo");

  if (!$modalAwardInfo.length) {
    return;
  }

  const ModalLogin = new bootstrap.Modal($modalAwardInfo[0], options);

  $modalAwardInfo.find(".closeButton").on("click", () => {
    ModalLogin.hide();
  })

  $(document).on("click", ".openAwardInfoModal", () => {
    ModalLogin.show();
  })
});