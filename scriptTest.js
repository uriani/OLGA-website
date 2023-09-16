import { createMobContainer } from "./createMobileContainer.js";
import { createPhotos } from "./createPhotos.js";
import { footerIntersecting } from "./footerIntersecting.js";
import { revealNavMenu } from "./revealNavMenu.js";
import { createPadContainer } from "./createPadConatainer.js";
import { createElem } from "./createElem.js";
import { createPadPlaceholder } from "./createPadPlaceholders.js";
import { createCompContainer } from "./createCompCont.js";

// recreate code
const body = document.querySelector("body");
const pageWidth = body.getBoundingClientRect().width;
const photoContainer = document.querySelectorAll(".photo-container");
const mobileVersionContainer = document.querySelector(".mobile-version");
const section1 = document.querySelector(".section--1");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
let mobileVersionCont;
let counter = 0;

//create mob version
if (body.getBoundingClientRect().width <= 700) {
  // create div container for mob versio
  const mobileVersionContHtml = document.createElement("div");
  photoContainer[0].appendChild(mobileVersionContHtml);
  mobileVersionContHtml.classList.add("mobile-container");
  mobileVersionCont = mobileVersionContHtml;

  //create photoplaceholders
  mobileVersionCont.innerHTML = createMobContainer();
  const mobVersCont = document.querySelectorAll(".image-placeholder");
  mobVersCont.forEach(async (elem, i) => {
    await createPhotos(elem, `/images/${i + 1}.jpg`, i);
  });

  let headerIntersecting = true;
  const navObsCallback = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      headerIntersecting = false;
    } else {
      headerIntersecting = true;
    }
  };

  // reveal nav menu when scroll up
  revealNavMenu();

  // intersectionObserver for load images

  const loadImages = function () {
    const obsCallback = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      counter += 10;
      document
        .querySelector(".mobile-container")
        .insertAdjacentHTML("beforeend", createMobContainer(counter));
      const photoContArr = document.querySelectorAll(".image-placeholder");
      photoContArr.forEach(async (el) => {
        if (el.dataset.counter > counter) {
          await createPhotos(el, `/images/${el.dataset.counter}.jpg`);
        }
      });

      if (counter >= 20) {
        observer.unobserve(footer);
      }
    };

    const obsOptions = {
      root: null,
      threshold: 0.9,
    };

    const loadMoreObserver = new IntersectionObserver(obsCallback, obsOptions);

    loadMoreObserver.observe(footer);
  };

  loadImages();
}

// Pad version
if (pageWidth > 700 && pageWidth < 1000) {
  // create column containers
  createPadContainer();

  const column1 = document.querySelector(".column--1");
  const column2 = document.querySelector(".column--2");
  //create photo placeholders in column 1
  for (let i = 1; i <= 10; i += 2) {
    createElem("div", ".column--1", `column-placeholder-${i}`, `${i}`);
    document
      .querySelector(`.column-placeholder-${i}`)
      .classList.add("column-placeholder");
  }

  //create photo placeholder in column 2
  for (let i = 2; i <= 10; i += 2) {
    createElem("div", ".column--2", `column-placeholder-${i}`, `${i}`);
    document
      .querySelector(`.column-placeholder-${i}`)
      .classList.add("column-placeholder");
  }

  const padPlaceholders = document.querySelectorAll(".column-placeholder");
  const padPlaceholdersArr = Array.prototype.slice.call(padPlaceholders, 0);

  for (let i = 1; i <= 10; i++) {
    counter++;
    createPhotos(
      document.querySelector(`.column-placeholder-${i}`),
      `/images/${i}.jpg`
    );
  }

  revealNavMenu();

  // load more photos
  const obsPadObs = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    for (let i = counter + 1; i <= counter + 10; i += 2) {
      createElem("div", ".column--1", `column-placeholder-${i}`, `${i}`);
      document
        .querySelector(`.column-placeholder-${i}`)
        .classList.add("column-placeholder");
    }

    for (let i = counter + 2; i <= counter + 10; i += 2) {
      createElem("div", ".column--2", `column-placeholder-${i}`, `${i}`);
      document
        .querySelector(`.column-placeholder-${i}`)
        .classList.add("column-placeholder");
    }

    for (let i = counter; i <= counter + 10; i++) {
      createPhotos(
        document.querySelector(`.column-placeholder-${i}`),
        `/images/${i}.jpg`
      );
    }

    counter += 10;
    if (counter >= 30) {
      padObserver.unobserve(footer);
    }
  };

  const obsOpt = {
    root: null,
    threshold: 1,
  };

  const padObserver = new IntersectionObserver(obsPadObs, obsOpt);
  padObserver.observe(footer);
}

if (pageWidth >= 1000) {
  createCompContainer();

  // create placeholders in columns
  //create photo placeholders in column 1
  for (let i = 1; i <= 12; i += 3) {
    createElem("div", ".column--1", `column-placeholder-${i}`, `${i}`);
    document
      .querySelector(`.column-placeholder-${i}`)
      .classList.add("column-placeholder");
  }

  //create photo placeholder in column 2
  for (let i = 2; i <= 12; i += 3) {
    createElem("div", ".column--2", `column-placeholder-${i}`, `${i}`);
    document
      .querySelector(`.column-placeholder-${i}`)
      .classList.add("column-placeholder");
  }

  //create photo placeholder in column 3
  for (let i = 3; i <= 12; i += 3) {
    createElem("div", ".column--3", `column-placeholder-${i}`, `${i}`);
    document
      .querySelector(`.column-placeholder-${i}`)
      .classList.add("column-placeholder");
  }

  for (let i = 1; i <= 12; i++) {
    counter++;
    createPhotos(
      document.querySelector(`.column-placeholder-${i}`),
      `/images/${i}.jpg`
    );
  }

  revealNavMenu();

  // load more photos
  const obsCompCall = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    for (let i = counter + 1; i <= counter + 12; i += 3) {
      createElem("div", ".column--1", `column-placeholder-${i}`, `${i}`);
      document
        .querySelector(`.column-placeholder-${i}`)
        .classList.add("column-placeholder");
    }

    for (let i = counter + 2; i <= counter + 12; i += 3) {
      createElem("div", ".column--2", `column-placeholder-${i}`, `${i}`);
      document
        .querySelector(`.column-placeholder-${i}`)
        .classList.add("column-placeholder");
    }

    for (let i = counter + 3; i <= counter + 12; i += 3) {
      createElem("div", ".column--3", `column-placeholder-${i}`, `${i}`);
      document
        .querySelector(`.column-placeholder-${i}`)
        .classList.add("column-placeholder");
    }

    for (let i = counter; i <= counter + 12; i++) {
      createPhotos(
        document.querySelector(`.column-placeholder-${i}`),
        `/images/${i}.jpg`
      );
    }
    counter += 12;
    if (counter >= 30) {
      padObserver.unobserve(footer);
    }
  };

  const obsOpt = {
    root: null,
    threshold: 0.9,
  };

  const padObserver = new IntersectionObserver(obsCompCall, obsOpt);
  padObserver.observe(footer);
}

const openImage = document.querySelector(".open-image");
// // open selected photo
// document.querySelectorAll(".column-placeholder").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     if (openImage.childNodes[0]) {
//       openImage.childNodes[0].remove();
//     }
//     const src = this.childNodes[0].getAttribute("src");

//     document.querySelector(".section--1").classList.toggle("make-section-blur");
//     openImage.classList.toggle("hide");

//     // create image and add class
//     const openImagePromise = function () {
//       return new Promise(function (resolve, reject) {
//         const img = document.createElement("img");
//         img.src = src;
//         img.classList.add('style-open-image');

//         img.addEventListener("load", function () {
//           openImage.append(img);
//           resolve(img);
//         });

//         img.addEventListener("load", function () {
//           reject(new Error("image not found"));
//         });
//       });
//     };
    
//     openImagePromise()
//   });
// });


document.querySelector('body').addEventListener('click', function(e) {
  if(e.target.src) {
    
    if (openImage.childNodes[0]) {
      openImage.childNodes[0].remove();
    }
    const src = e.target.getAttribute("src");
    console.log(src)
    document.querySelector(".section--1").classList.toggle("make-section-blur");
    openImage.classList.toggle("hide");
  
    // create image and add class
    const openImagePromise = function () {
      return new Promise(function (resolve, reject) {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add('style-open-image');
  
        img.addEventListener("load", function () {
          openImage.append(img);
          resolve(img);
        });
  
        img.addEventListener("load", function () {
          reject(new Error("image not found"));
        });
      });
  }
  openImagePromise()
  };
  

});