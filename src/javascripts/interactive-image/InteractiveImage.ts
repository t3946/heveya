import $ from "jquery";

$(() => {
  const $interactiveImage = $(".interactiveImage");
  let timer = null;

  function resizeImages() {
    $interactiveImage.each((i, e) => {
      const $elem = $(e);
      const $slides = $elem.find(".imageWrapper");
      const $images = $elem.find(".image");
      const containerWidth = $elem.width();
      const containerHeight = $elem.height();

      function resizeImage(imageElem) {
        const $imageElem = $(imageElem);
        console.log($imageElem[0].width, $imageElem[0]);
        const imageWidth = $imageElem.width();
        const imageHeight = $imageElem.height();
        const dWidth = containerWidth - imageWidth;
        const dHeight = containerHeight - imageHeight;
        const left = Math.round(dWidth / 2);
        const top = Math.round(dHeight / 2);

        $imageElem.css({left, top});
      }

      $images.each((j, e) => {
        resizeImage(e);
      });

      $images.on("load", (e) => {
        resizeImage(e.target);
      });

      //pagination
      const $pagination = $elem.find(".pagination");
      const $leftBorder = $pagination.find(".leftBorder");
      const $item = $pagination.find(".item");
      const $rightBorder = $pagination.find(".rightBorder");
      const trigger = "mouseover";

      $leftBorder.on(trigger, () => {
        showSlide(0);
      });

      $rightBorder.on(trigger, () => {
        showSlide($slides.length - 1);
      });

      $item.each((i, e) => {
        $(e).on(trigger, () => showSlide(i));
      });

      $pagination.on("mouseleave", (e) => {
        showSlide(0);
      });

      const showSlide = (index) => {
        $slides.css("visibility", "hidden");
        $slides.eq(index).css("visibility", "visible").show();
        $item
          .removeClass("item_active")
          .eq(index)
          .addClass("item_active");
      }

      showSlide(parseInt($elem[0].dataset["active"]));
    });
  }

  window.addEventListener("resize", () => {
    clearTimeout(timer);

    timer = setTimeout(resizeImages, 100);
  });

  resizeImages();
});