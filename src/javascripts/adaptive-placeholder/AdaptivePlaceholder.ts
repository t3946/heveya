import $ from "jquery";

const Breakpoint = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 834,
    lg: 992,
    xl: 1200,
    xxl: 1840,
  },

  getBySize(size) {
    if (size < this.breakpoints.sm) {
      return "xs";
    }

    if (size < this.breakpoints.md) {
      return "sm";
    }

    if (size < this.breakpoints.lg) {
      return "md";
    }

    if (size < this.breakpoints.xl) {
      return "lg";
    }

    if (size < this.breakpoints.xxl) {
      return "xl";
    }

    return "xxl";
  },

  //bp1 great or equal bp2
  ge(bp1, bp2) {
    return this.breakpoints[bp1] >= this.breakpoints[bp2];
  },
}

$(() => {
  const $inputs = $(".adaptivePlaceholder");
  const changePlaceholder = function () {
    $inputs.each((i, e) => {
      const {
        placeholderXs, placeholderMd
      } = e.dataset;
      const curBp = Breakpoint.getBySize(window.innerWidth);
      let placeholder = e.getAttribute("placeholder");

      if (placeholderXs !== undefined && Breakpoint.ge(curBp, "xs")) {
        placeholder = placeholderXs;
      }

      if (placeholderMd !== undefined && Breakpoint.ge(curBp, "md")) {
        placeholder = placeholderMd;
      }

      e.setAttribute("placeholder", placeholder);
    });
  }

  let throttleTimeout = null;

  $(window).on("resize", () => {
    clearTimeout(throttleTimeout);
    throttleTimeout = setTimeout(changePlaceholder, 100);
  });

  changePlaceholder();
});