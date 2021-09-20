let projectCards = [
  {
    image: "images/projectsample.png",
    title: "Portfolio",
    info: "Information about the project goes here",
    linkButton: "http:www.google.com",
    codeButton: "https://github.com/GrahamTCreighton/portfolio.git",
  },
  {
    image: "images/projectsample.png",
    title: "Portfolio",
    info: "Information about the project goes here",
    linkButton: "http:www.google.com",
    codeButton: "https://github.com/GrahamTCreighton/portfolio.git",
  },
];

function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

class App {
  constructor() {
    this.render(); // RENDER FUNCTION NEEDS WORK
  }
  createAllProjects() {
    for (i = 0; i < projectCards.length; i++) {
      createCard(projectCards[i]);
    }
  }

  createCard(projectCard) {
    let projectCardElement = document.createElement("div");
    setAttributes(projectCardElement, { class: "container" });
    document.getElementById("projects").appendChild(projectCardElement);
    this.createImage(projectCardElement, projectCard.image);
    this.createLinkButton(projectCardElement, projectCard.linkButton);
    this.createCodeButton(projectCardElement, projectCard.codeButton);
    this.createTitle(projectCardElement, projectCard.title);
    this.createInfo(projectCardElement, projectCard.info);
  }
  createImage(parentElement, imageAddress) {
    let image = document.createElement("img");
    setAttributes(image, { src: imageAddress });
    parentElement.appendChild(image);
  }
  createLinkButton(parentElement, linkAddress) {
    let linkButton = document.createElement("a");
    setAttributes(linkButton, {
      class: "btn1",
      href: linkAddress,
      target: "_blank",
    });
    linkButton.innerHTML = "Link";
    parentElement.appendChild(linkButton);
  }
  createCodeButton(parentElement, codeAddress) {
    let codeButton = document.createElement("a");
    setAttributes(codeButton, {
      class: "btn2",
      href: codeAddress,
      target: "_blank",
    });
    linkButton.innerHTML = "Code";
    parentElement.appendChild(codeButton);
  }
  createTitle(parentElement, title) {
    let createTitle = document.createElement("div");
    setAttributes(createTitle, { class: "projectTitle" });
    createTitle.innerHTML = title;
    parentElement.appendChild(createTitle);
  }
  createInfo(card, info) {
    let createInfo = document.createElement("p");
    createInfo.innerHTML = info;
    parentElement.appendChild(createInfo);
  }

  render() {
    document.getElementById("projects");
    // RENDER FUNCTION NEEDS WORK
  }
}
let ourApp = new App();
ourApp.render();