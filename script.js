function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
  changeSignatureAndStorage();
}

function changeSignatureAndStorage() {
  let myImage = document.getElementById("signature");
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/signature.png") {
    myImage.setAttribute("src", "images/signaturewhite.png");
    localStorage.setItem("dark-mode", "true");
  } else {
    myImage.setAttribute("src", "images/signature.png");
    localStorage.setItem("dark-mode", "false");
  }
}

function hideAndShow() {} // working on hiding and showing function
