/* Text-only four-choice session mapping. Mirrors gichul-quiz originalIndex logic. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.AutomotiveQuizUtils = api;
})(typeof globalThis !== "undefined" ? globalThis : window, function () {
  "use strict";
  function shuffleOrder(count, random = Math.random) {
    if (!Number.isInteger(count) || count < 2 || count > 5) throw new TypeError("invalid choice count");
    const order = Array.from({ length: count }, (_, index) => index + 1);
    for (let i = order.length - 1; i > 0; i--) {
      const n = Number(random());
      const j = Math.max(0, Math.min(i, Math.floor(n * (i + 1))));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  }
  function originalIndex(order, displayedNumber) {
    return Array.isArray(order) ? order[Number(displayedNumber) - 1] : Number(displayedNumber);
  }
  function correctDisplayIndex(order, originalAnswer) {
    return Array.isArray(order) ? order.indexOf(Number(originalAnswer)) + 1 : Number(originalAnswer);
  }
  function isCorrect(order, displayedNumber, originalAnswer) {
    return Number(displayedNumber) > 0 && originalIndex(order, displayedNumber) === Number(originalAnswer);
  }
  return Object.freeze({ shuffleOrder, originalIndex, correctDisplayIndex, isCorrect });
});
