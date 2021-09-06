function toggleDarkMode() {
  console.log("toggledarkmodefunction");
  let element = document.body;
  let myImage = document.getElementById("signature");
  const isDarkMode = localStorage.getItem("dark-mode");
  if (isDarkMode == "true") {
    console.log("switchingdarkmodetofalse");
    element.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "false");
    myImage.setAttribute("src", "images/signature.png");
  } else {
    console.log("switchingdarkmodetotrue");
    element.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "true");
    myImage.setAttribute("src", "images/signaturewhite.png");
  }
}

function hideAndShow() {}

//use local storage to know what page to load.
//when clicking on links setting the value on localstorage and reload.
