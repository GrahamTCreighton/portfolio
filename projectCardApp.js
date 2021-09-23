let projectCards = [
  {
    id: 'project1',
    image: "images/projectsample.png",
    title: "Portfolio",
    info: "Information about the project goes here",
    linkButton: "http:www.google.com",
    codeButton: "https://github.com/GrahamTCreighton/portfolio.git",
  },
  {
    id: 'project2',
    image: "images/projectsample.png",
    title: "Portfolio 2",
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

export default class Projects {
  constructor() {
    projectCards.forEach(project => this.createCard(project))
  }

  createCard(projectCard) {
    console.log(projectCard)
    let projectCardElement = document.createElement("div");
    setAttributes(projectCardElement, { class: "container", id: projectCard.id });
    document.getElementById("projects").appendChild(projectCardElement);
    this.createImage(projectCardElement, projectCard.image);
    this.createLinkButton(projectCardElement, projectCard.linkButton);
    this.createCodeButton(projectCardElement, projectCard.codeButton);
    this.createTitle(projectCardElement, projectCard.title);
    this.createInfo(projectCardElement, projectCard.info);
    const projectsContainer = window.document.getElementById('projects')
    projectsContainer.appendChild(projectCardElement)
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
    codeButton.innerHTML = "Code";
    parentElement.appendChild(codeButton);
  }
  createTitle(parentElement, title) {
    let createTitle = document.createElement("div");
    setAttributes(createTitle, { class: "projectTitle" });
    createTitle.innerHTML = title;
    parentElement.appendChild(createTitle);
  }
  createInfo(parentElement, info) {
    let createInfo = document.createElement("p");
    createInfo.innerHTML = info;
    parentElement.appendChild(createInfo);
  }
}
