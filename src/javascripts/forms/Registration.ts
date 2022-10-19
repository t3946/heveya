import $ from "jquery";

$(() => {
  const $registrationPage = $(".registrationPage");
  const $stage1 = $registrationPage.find(".stage1");
  const $stage2Personal = $registrationPage.find(".stage2_personal").hide();
  const $stage2Company = $registrationPage.find(".stage2_company").hide();
  let role = null;
  let status = null;

  $stage1.find("#selectRole").on("change", (e: any) => {
    role = e.target.value;
  });

  $stage1.find("#selectStatus").on("change", (e: any) => {
    status = e.target.value;
  });

  $registrationPage.find(".backToStatusSelect").on("click", () => {
    $stage1.show();
    $stage2Personal.hide();
    $stage2Company.hide();
  });

  $registrationPage.find(".stage1 .nextStage").on("click", () => {
    if (!role || !status) {
      return;
    }

    $stage1.hide();

    switch (status) {
      case "personal":
        $stage2Personal.show();
        break;

      case "individual_entrepreneur":case "company":
        $stage2Company.show();
        break;
    }
  });

  $registrationPage.find("form").on("submit", (e) => {
    const $form = $(e.target);

    //check passwords match
    const password = $form.find("[name=password]").val();
    const passwordAgain = $form.find("[name=passwordAgain]").val();

    if (password !== passwordAgain) {
      $(".invalidPasswordAgain").show();
      e.preventDefault();
      return;
    } else {
      $(".invalidPasswordAgain").hide();
    }

    return;
  });
});