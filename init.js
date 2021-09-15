const mode = localStorage.getItem("dark-mode");
if (mode == "true") {
  const element = document.body;
  element.classList.add("dark-mode");
  const myImage = document.getElementById("signature");
  myImage.setAttribute("src", "images/signaturewhite.png");
}

hideAndShow("home");
