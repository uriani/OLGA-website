export const revealNavMenu = function () {
  const header = document.querySelector("header");

  const obsCall = function (entries, observer) {
    const [entry] = entries;

    let prevScroll = window.pageYOffset;
    

    window.addEventListener("scroll", () => {
      let currentScroll = window.pageYOffset;
      if (prevScroll > currentScroll && !entry.isIntersecting) {
        document.querySelector(".nav-logo-container").classList.add("show");
      } else {
        document.querySelector(".nav-logo-container").classList.remove("show");
      }

      prevScroll = currentScroll;
    });
  };

  const obsOpt = {
    root: null,
    threshold: 0,
  };

  const headerObs = new IntersectionObserver(obsCall, obsOpt);
  headerObs.observe(header);
};
