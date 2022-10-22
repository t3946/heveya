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

      //show active slide
      const showSlide = (index) => {
        $slides.css("visibility", "hidden");
        $slides.eq(index).css("visibility", "visible").show();
      }

      showSlide(parseInt($elem[0].dataset["active"]));

      //pagination
      const $pagination = $elem.find(".pagination");
      const $leftBorder = $pagination.find(".leftBorder");
      const $item = $pagination.find(".item");
      const $rightBorder = $pagination.find(".rightBorder");

      $leftBorder.on("click", () => {
        showSlide(0);
      });

      $rightBorder.on("click", () => {
        showSlide($slides.length);
      });

      $item.each((i, e) => {
        $(e).on("click", () => showSlide(i));
      });
    });
  }

  window.addEventListener("resize", () => {
    clearTimeout(timer);

    timer = setTimeout(resizeImages, 100);
  });

  resizeImages();
});