"use strict";

/**
 * @typedef ArticleSource
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef Article
 * @property {string} author
 * @property {string} content
 * @property {string} description
 * @property {string} publishedAt
 * @property {ArticleSource[]} source
 * @property {string} title
 * @property {string} url
 * @property {string} urlToImage
 */

/**
 * @typedef ArticlePage
 * @property {"ok"|"error"} status
 * @property {string?} code
 * @property {string?} message
 * @property {number} totalResults
 * @property {Article[]} articles
 */

/**
 * @typedef ArticleRequest
 * @property {string} country
 * @property {string?} category
 * @property {number?} pageSize
 * @property {number?} page
 * @property {string} apiKey
 * @property {string?} q
 */

/**
 * @param {number} page
 */
async function getArticlePage(page) {
  /** @type {ArticleRequest} */
  const reqParams = {
    country: "us",
    apiKey: API_KEY,
    pageSize: currentSetting.pageSize,
    category: currentSetting.category,
    page,
  };
  return fetch(`${NEWS_URL}?${new URLSearchParams(reqParams)}`);
}

/**
 * @param {number} page
 */
function setPage(page) {
  urlParams.set("page", page);
  window.location.search = urlParams;
}

/**
 * @param {number} currentPage
 */
function getPrevPageCall(currentPage) {
  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  return () => setPage(prevPage);
}

function getNextPageCall(currentPage, totalPage) {
  const nextPage = currentPage < totalPage ? currentPage + 1 : totalPage;
  return () => setPage(nextPage);
}

/**
 * @param {Article[]} articles
 */
function renderArticles(articles) {
  newsContainer.innerHTML = articles.map(
    (article) => `
      <div class="card flex-row flex-wrap">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="${article.urlToImage ?? "/assets/no-image-icon.png"}"
              class="card-img"
              alt="${article.title}"
            />
          </div>
          <div class="col-md-8 mb-3">
            <div class="card-body">
              <h5 class="card-title">${article.title ?? ""}</h5>
              <p class="card-text">${article.description ?? ""}</p>
              <a href="${article.url ?? "#"}" class="btn btn-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    `,
  );
}

/**
 * @param {number} currentPage
 */
function renderPageNavigation(currentPage) {
  if (currentPage <= 1) {
    pageNum.innerText = 1;
    prevBtn.closest(".page-item").classList.add("disabled");
  } else {
    pageNum.innerText = currentPage;
  }
}

/**
 * @param {number} currentPage
 */
function renderPageNavigationPost(currentPage, totalPage) {
  if (currentPage >= totalPage) {
    nextBtn.closest(".page-item").classList.add("disabled");
  }
}

async function setupNewsPage() {
  const reqPage = urlParams.get("page");
  const currentPage = reqPage ? parseInt(reqPage) : 1;

  renderPageNavigation(currentPage);

  prevBtn.addEventListener("click", getPrevPageCall(currentPage));

  try {
    const res = await getArticlePage(currentPage);
    /** @type {ArticlePage} */
    const articlePage = await res.json();

    if (articlePage.status === "error") {
      throw new Error(articlePage.message);
    }

    renderArticles(articlePage.articles);

    const totalPage = Math.ceil(
      articlePage.totalResults / currentSetting.pageSize,
    );

    renderPageNavigationPost(currentPage, totalPage);

    nextBtn.addEventListener("click", getNextPageCall(currentPage, totalPage));
  } catch (err) {
    alert(err.message);
  }
}

const API_KEY = "a232ef20848d4db8b8ced2532d3f9268";
const NEWS_URL = "https://newsapi.org/v2/top-headlines";

const newsContainer = document.getElementById("news-container");
const prevBtn = document.getElementById("btn-prev");
const pageNum = document.getElementById("page-num");
const nextBtn = document.getElementById("btn-next");

const urlParams = new URLSearchParams(window.location.search);
setupNewsPage();
