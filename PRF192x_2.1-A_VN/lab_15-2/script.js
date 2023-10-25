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
 * @returns {Promise<HTMLImageElement>} Promise of image element
 */
function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;
    img.onload = () => {
      imgElement.appendChild(img);
      resolve(img);
    };
    img.onerror = () => {
      reject("Image is not found!");
    };
  });
}

/**
 * @param {string} imgPath image to load
 */
async function loadImage(imgPath) {
  try {
    const img = await createImage(imgPath);
    await wait(2000);
    img.style.display = "none";
  } catch (err) {
    imgElement.appendChild(err);
  }
}

/**
 * @param {string[]} imgArr array of image string
 */
async function loadAll(imgArr) {
  const imgs = await Promise.all(imgArr.map((imgPath) => createImage(imgPath)));
  imgs.forEach((img) => {
    img.classList.add("parallel");
  });
}

async function loadNPause() {
  await loadImage(
    "https://courses.funix.edu.vn/asset-v1:FUNiX+WEB101x_2.1-A_VN+2022_T6+type@asset+block@WEB101x_03_VN-thumb.jpg",
  );

  await wait(2000);

  await loadImage(
    "https://courses.funix.edu.vn/asset-v1:FUNiX+PRF192x_2.1-A_VN+2022_T3+type@asset+block@495484_385c_VN.jpg",
  );
}

loadAll([
  "https://courses.funix.edu.vn/asset-v1:FUNiX+WEB101x_2.1-A_VN+2022_T6+type@asset+block@WEB101x_03_VN-thumb.jpg",
  "https://courses.funix.edu.vn/asset-v1:FUNiX+PRF192x_2.1-A_VN+2022_T3+type@asset+block@495484_385c_VN.jpg",
]);
