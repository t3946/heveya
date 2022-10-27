import $ from "jquery";

$(() => {
  function toggle(switchElement) {
    const $switchElement = $(switchElement);
    const $onLabel = $switchElement.find(".switchOnLabel");
    const $offLabel = $switchElement.find(".switchOffLabel");
    const $input: any = $switchElement.find("input[type=checkbox]");

    //is on
    if ($input[0].checked) {
      $onLabel.addClass("switchOnLabel_active");
      $offLabel.removeClass("switchOffLabel_active");
    } else {
      $onLabel.removeClass("switchOnLabel_active");
      $offLabel.addClass("switchOffLabel_active");
    }
  }

  $(document).on("change", ".switchGroup input[type=checkbox]", (e) => {
    toggle($(e.target).parents(".switchGroup"));
  });

  $(".switchGroup").each((i, e) => toggle(e));
});
