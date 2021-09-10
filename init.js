const mode = localStorage.getItem("dark-mode");
if (mode == "true") {
  const element = document.body;
  element.classList.add("dark-mode");
  const myImage = document.getElementById("signature");
  myImage.setAttribute("src", "images/signaturewhite.png");
}
//as an exercise try not to repeat myself, use functions with parameters.
hideAndShow("home");
