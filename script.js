// Get the element with the ID "popup" (button or link that will open the video popup)
const popup = document.getElementById("popup");

// Get the element with the ID "close" (button or icon that will close the video popup)
const close = document.getElementById("close");

// Get the element with the ID "videoPopup1" (the container or div that holds the video content)
const videoPopup1 = document.getElementById("videoPopup1");

// Add a click event listener to the "popup" element
// When "popup" is clicked, set the display style of "videoPopup1" to "block" (making it visible)
popup.addEventListener("click", () => {
  videoPopup1.style.display = "block";
});

// Add a click event listener to the "close" element
// When "close" is clicked, set the display style of "videoPopup1
close.addEventListener("click", () => {
  videoPopup1.style.display = "none";
});
