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
 * @property {string} apiKey
 * @property {string?} q
 * @property {string?} searchIn
 * @property {string?} sources
 * @property {string?} domains
 * @property {string?} excludeDomains
 * @property {string?} from
 * @property {string?} to
 * @property {string?} language
 * @property {string?} sortBy
 * @property {number?} pageSize
 * @property {number?} page
 */

/**
 * @param {number} page
 * @param {string} query
 */
async function getArticlePage(page, query) {
  /** @type {ArticleRequest} */
  const reqParams = {
    apiKey: API_KEY,
    pageSize: currentSetting.pageSize,
    q: query,
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

/**
 * @param {SubmitEvent} e
 */
function searchArticle(e) {
  const query = queryInput.value;
  try {
    if (!query) {
      throw new Error("Please input for query!");
    }
    urlParams.set("q", query);
    window.location.search = urlParams;
  } catch (err) {
    alert(err.message);
  }
  e.preventDefault();
  return false;
}

async function setupSearchPage() {
  const reqPage = urlParams.get("page");
  const query = urlParams.get("q");
  const currentPage = reqPage ? parseInt(reqPage) : 1;

  queryInput.value = query;
  renderPageNavigation(currentPage);

  prevBtn.addEventListener("click", getPrevPageCall(currentPage));

  searchForm.addEventListener("submit", searchArticle);

  try {
    const res = await getArticlePage(currentPage, query);
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
const NEWS_URL = "https://newsapi.org/v2/everything";

const newsContainer = document.getElementById("news-container");
const prevBtn = document.getElementById("btn-prev");
const pageNum = document.getElementById("page-num");
const nextBtn = document.getElementById("btn-next");
/** @type {HTMLInputElement} */
const queryInput = document.getElementById("input-query");
const searchForm = document.getElementById("form-search");

const urlParams = new URLSearchParams(window.location.search);
setupSearchPage();
