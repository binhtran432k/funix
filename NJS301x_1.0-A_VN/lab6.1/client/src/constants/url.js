const baseUrl = "http://localhost:5000";

const getUrl = (url) => [baseUrl, url].filter(Boolean).join("/");

const url = {
  user: getUrl("user"),
};

export { url };
