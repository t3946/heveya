import $ from "jquery";

$(() => {
  $(document).on("click", ".showServicesDescription", (e) => {
    $(e.target).parents(".taskDescription").find(".servicesDescription").toggle();
  });
});