const getSel = (selector) => {
  return document.querySelector(selector);
};
const getSelListInNode = (node, selector) => {
  return node.querySelectorAll(selector)
}