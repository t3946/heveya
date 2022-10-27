import $ from "jquery";

$(() => {
  function toggle(rootElem) {
    const $rootElem = $(rootElem);
    const $isOn = $rootElem.find(".isOn");
    const $isOff = $rootElem.find(".isOff");
    const $inputCheckbox: any = $rootElem.find(".switch input[type='checkbox']");

    if ($inputCheckbox[0].checked) {
      $isOn.show();
      $isOff.hide();
    } else {
      $isOn.hide();
      $isOff.show();
    }
  }

  $(".inputWithSwitch").each((i, e) => {
    toggle(e);
  });

  $(document).on("change", ".inputWithSwitch .switch input[type='checkbox']", (e) => {
    toggle($(e.target).parents(".inputWithSwitch"));
  })
});