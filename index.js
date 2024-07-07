/** @format */

document.querySelectorAll(".bar").forEach(function (bar) {
  var percentage = parseFloat(bar.getAttribute("data-percentage"));
  bar.style.height = percentage + "%";
});
