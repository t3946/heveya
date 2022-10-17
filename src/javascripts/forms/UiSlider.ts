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
    const end = parseFloat($endInput.val().toString());

    const format = (start, end) => {
      return [parseInt(start), parseInt(end)];
    }

    const formatDisplay = (...values): string[] => {
      const result: string[] = [];

      for (let i in values) {
        if (values[i] < 1000 * 1000) {
          result.push(values[i].toLocaleString());
        } else if (values[i] >= 1000 * 1000 && values[i] < 1000 * 1000 * 1000) {
          const value = Math.floor(values[i] / 1000 / 1000);

          result.push(value.toLocaleString() + " млн");
        } else if (values[i] >= 1000 * 1000 * 1000) {
          const value = Math.floor(values[i] / 1000 / 1000 / 1000);

          result.push(value.toLocaleString() + " млр");
        }
      }

      return result;
    }

    const updateFieldsValues = (start, end) => {
      [start, end] = format(start, end);

      $startInput.val(start);
      $endInput.val(end);

      const [displayStar, displayEnd] = formatDisplay(start, end);
      $displayStartValue.text(displayStar);
      $displayEndValue.text(displayEnd);
    }

    $elem.on("change", "input", () => {
      const rawStart = $startInput.val().toString();
      const rawEnd = $endInput.val().toString();
      let [start, end] = format(rawStart, rawEnd);

      slider.set([start, end]);

      // @ts-ignore
      updateFieldsValues(...slider.get());
    });

    const slider = noUiSlider.create(sliderElement, {
      start: [start, end],
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
