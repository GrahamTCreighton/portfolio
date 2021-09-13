function toggleDarkMode() {
  const element = document.body;
  const isDarkMode = localStorage.getItem("dark-mode");
  if (isDarkMode == "true") {
    element.classList.remove("dark-mode");
    setItemAttribute("false", "images/signature.png");
  } else {
    element.classList.add("dark-mode");
    setItemAttribute("true", "images/signaturewhite.png");
  }
}

function setItemAttribute(boolean, image) {
  const myImage = document.getElementById("signature");
  localStorage.setItem("dark-mode", boolean);
  myImage.setAttribute("src", image);
}

function hide() {
  const mainPage = document.getElementsByClassName("content");
  for (let i = 0; i < mainPage.length; i++) {
    mainPage[i].style.display = "none";
  }
}

function show(elementID) {
  const showProject = document.getElementById(elementID);
  showProject.style.display = "block";
}

function hideAndShow(elementID) {
  hide();
  show(elementID);
}

function goToSite(link) {
  target = "_blank";
  location.href = link;
}
