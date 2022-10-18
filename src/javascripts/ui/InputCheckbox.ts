import $ from "jquery";

$(function () {
  function toggleCssClasses(elem) {
    if (!elem) {
      return;
    }

    const $elem = $(elem);
    const checked = $elem.find("input").prop("checked");
    const $checkContainer = $elem.find(".checkContainer");

    if (checked) {
      $checkContainer.addClass("checkContainer_checked")
    } else {
      $checkContainer.removeClass("checkContainer_checked")
    }
  }

  $(".baseInputCheckbox").each((i, elem) => toggleCssClasses(elem));

  $(document).on("change", ".baseInputCheckbox input", function (e) {
    toggleCssClasses($(e.target).parents(".baseInputCheckbox"));
  })
});