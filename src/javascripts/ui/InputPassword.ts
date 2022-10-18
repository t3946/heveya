import $ from "jquery";

$(() => {
  $(".inputPassword").each((i, elem) => {
    const $elem = $(elem);
    const $input = $elem.find("input");
    const $showAsTextButton = $elem.find(".icon_type_password");
    const $showAsPasswordButton = $elem.find(".icon_type_text");

    $showAsPasswordButton.hide();

    $showAsTextButton.on("click", () => {
      $input.attr("type", "text");
      $showAsTextButton.hide();
      $showAsPasswordButton.show();
    });

    $showAsPasswordButton.on("click", () => {
      $input.attr("type", "password");
      $showAsPasswordButton.hide();
      $showAsTextButton.show();
    });
  })
});