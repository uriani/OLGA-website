export const createMobContainer = function (counter = 0) {
  let html = "";

  for (let i = 1; i <= 10; i++) {
    html += `<div class="image-placeholder image-placeholder--${
      counter + i
    }" data-counter="${counter + i}"></div>`;
  }

  return html;
};
