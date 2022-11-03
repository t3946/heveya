import $ from "jquery";

export default (callbacks: Record<any, any>) => {
  const breakpoints = {
    sm: 576,
    md: 834,
    lg: 992,
    xl: 1340,
    xxl: 1840,
  }
  let throttleTimeout = null;

  function responsive() {
    if (callbacks.xs) {
      callbacks.xs();
    }

    if (callbacks.sm && window.innerWidth >= breakpoints.sm) {
      callbacks.sm();
    }

    if (callbacks.md && window.innerWidth >= breakpoints.md) {
      callbacks.md();
    }

    if (callbacks.lg && window.innerWidth >= breakpoints.lg) {
      callbacks.lg();
    }

    if (callbacks.xl && window.innerWidth >= breakpoints.xl) {
      callbacks.xl();
    }

    if (callbacks.xxl && window.innerWidth >= breakpoints.xxl) {
      callbacks.xxl();
    }
  }

  $(window).on("resize", () => {
    clearTimeout(throttleTimeout);
    throttleTimeout = setTimeout(responsive, 100);
  });

  responsive();
}