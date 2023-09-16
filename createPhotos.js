export const createPhotos = function (imagePlaceholder, imgPath, placeholerIndex) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imagePlaceholder.append(img);
      resolve(img);
    });

    img.addEventListener("load", function () {
      reject(new Error("image not found"));
    });
  });
};
