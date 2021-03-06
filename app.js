let projectCard = [
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
    this.render();
  }
  createAllProjects() {
    for (i = 0; i < projectCard.length; i++) {
      createCard(
        projectCard[i].image,
        projectCard[i].linkButton,
        projectCard[i].codeButton,
        projectCard[i].title,
        projectCard[i].info
      );
    }
  }

  createCard(imageAddress, linkAddress, codeAddress, title, info) {
    let projectCardElement = document.createElement("div");
    setAttributes(projectCardElement, { class: "container" });
    document.getElementById("projects").appendChild(projectCardElement);
    this.createImage(projectCardElement, imageAddress);
    this.createLinkButton(projectCardElement, linkAddress);
    this.createCodeButton(projectCardElement, codeAddress);
    this.createTitle(projectCardElement, title);
    this.createInfo(projectCardElement, info);
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
  }
}
let ourApp = new App();
ourApp.render();
