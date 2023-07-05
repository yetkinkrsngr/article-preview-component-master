const logoButton = document.querySelector(".logo");
const shareDisplay = document.querySelector(".logos");
const box = document.querySelector(".box");
logoButton.addEventListener("click", function () {
  shareDisplay.classList.remove("hidden");
});
document.addEventListener("click", function (event) {
  // Check if the clicked element is not the logo button or logos container or their child elements
  if (
    !logoButton.contains(event.target) &&
    !shareDisplay.contains(event.target)
  ) {
    shareDisplay.classList.add("hidden");
  }
});
