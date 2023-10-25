/** @type {HTMLDivElement} */
const imgElement = document.getElementsByClassName("image")?.[0];

/**
 * @param {number} ms miliseconds to wait
 * @returns {Promise<never>}
 */
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

/**
 * @param {string} imgPath image path to render
 * @returns {Promise<never>} Promise of image element
 */
function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject("Image is not found!");
    };
  })
    .then(
      /** @param {HTMLImageElement} img */
      async (img) => {
        imgElement.replaceChildren(img);
        await wait(2000);
        img.style.display = "none";
      },
    )
    .catch(
      /** @param {string} err */
      (err) => {
        imgElement.replaceChildren(err);
      },
    );
}

async function runner() {
  await createImage(
    "https://courses.funix.edu.vn/asset-v1:FUNiX+WEB101x_2.1-A_VN+2022_T6+type@asset+block@WEB101x_03_VN-thumb.jpga",
  );

  await wait(2000);

  await createImage(
    "https://courses.funix.edu.vn/asset-v1:FUNiX+PRF192x_2.1-A_VN+2022_T3+type@asset+block@495484_385c_VN.jpg",
  );
}

runner();
