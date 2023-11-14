const path = require("path");

let rootDir = null;

/**
 * Only set one time from root
 * @param {string} dir
 */
function setRootDir(dir) {
  if (!rootDir) {
    rootDir = dir;
  }
}

function getPath(...paths) {
  return path.join(rootDir, ...paths);
}

module.exports = {
  setRootDir,
  getPath,
};
