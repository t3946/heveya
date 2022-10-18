import $ from "jquery";
import noUiSlider from "nouislider";

$(() => {
  $(".rangeSlider").each((i, elem) => {
    const $elem = $(elem);
    const sliderElement = $elem.find(".slider")[0];
    const min = parseFloat(elem.dataset.min);
    const max = parseFloat(elem.dataset.max);

    if (!sliderElement) {
      return;
    }

    const $startInput = $elem.find("input.start");
    const $endInput = $elem.find("input.end");
    const $displayStart = $elem.find(".display_start");
    const $displayEnd = $elem.find(".display_end");
    const $displayStartValue = $displayStart.find(".value");
    const $displayEndValue = $displayEnd.find(".value");
    const start = parseFloat($startInput.val().toString());
    const end = $endInput.length ? parseFloat($endInput.val().toString()) : null;

    const format = (value) => {
      return parseInt(value);
    }

    const formatDisplay = (value): string => {
      let result = null;

      if (value < 1000 * 1000) {
        result = value.toLocaleString();
      } else if (value >= 1000 * 1000 && value < 1000 * 1000 * 1000) {
        result = Math.floor(value / 1000 / 1000).toLocaleString() + " млн";
      } else if (value >= 1000 * 1000 * 1000) {
        result = Math.floor(value / 1000 / 1000 / 1000).toLocaleString() + " млр";
      }

      return result;
    }

    const updateFieldsValues = (start, end = null) => {
      start = format(start);
      $startInput.val(start);

      const displayStar = formatDisplay(start);

      $displayStartValue.text(displayStar);

      if (typeof end !== null) {
        end = format(end);
        $endInput.val(end);

        const displayEnd = formatDisplay(end);

        $displayEndValue.text(displayEnd);
      }
    }

    $elem.on("change", "input", () => {
      const rawStart = $startInput.val().toString();

      if ($endInput.length) {
        const rawEnd = $endInput.val().toString();
        let [start, end] = [format(rawStart), format(rawEnd)];

        slider.set([start, end]);

        // @ts-ignore
        updateFieldsValues(...slider.get());
      } else {
        let start = format(rawStart);
        slider.set(start);
        updateFieldsValues(slider.get());
      }
    });

    const slider = noUiSlider.create(sliderElement, {
      start: $endInput.length ? [start, end] : start,
      connect: true,
      range: {
        min, max
      },
      step: 1,
    });

    updateFieldsValues(start, end);

    slider.on("change", function ([start, end]) {
      updateFieldsValues(start, end);
    });

    $displayStart.on("click", (e) => {
      $displayStart.hide();
      $startInput.attr("type", "text");
      $startInput.trigger("focus");
    });

    $startInput.on("blur", () => {
      $displayStart.show();
      $startInput.attr("type", "hidden");
    });

    $displayEnd.on("click", (e) => {
      $displayEnd.hide();
      $endInput.attr("type", "text");
      $endInput.trigger("focus");
    });

    $endInput.on("blur", () => {
      $displayEnd.show();
      $endInput.attr("type", "hidden");
    });
  })
});
