/**
 * @param {Date} date
 * @returns {string}
 */
const getRenderDate = (date) => {
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export { getRenderDate };
