import setAttributes from "api.js";
import projectCard from "./projectstorage";

class App {
  constructor() {
    this.render();
  }

  createCard() {
    let projectCardElement = document.createElement("div");
    setAttributes(projectCardElement, {class:"container"})
    document.getElementById("projects").appendChild(projectCardElement);
    this.createImage(projectCardElement)
    this.createLinkButton(projectCardElement)
    this.createCodeButton(projectCardElement)
    this.createTitle(projectCardElement)
    this.createInfo(projectCardElement)
  }
  createImage(parentElement) {
    let image = document.createElement("img");
    setAttributes(image,{src: ""}) /* Need to make loop to go over all the images in projectcard storage */
    parentElement.appendChild(image);
  }
  createLinkButton(parentElement) {
    let linkButton = document.createElement("a");
    setAttributes(linkButton, { class: "btn1", href: /*stuck need ideas to access link */, target: "_blank" });
    linkButton.innerHTML = "Link";
    parentElement.appendChild(linkButton);
  }
  createCodeButton(parentElement){
    let codeButton = document.createElement("a");
    setAttributes(codeButton, { class: "btn2", href: /*need ideas how to access link*/,target: "_blank"  });
    linkButton.innerHTML = "Code";
    parentElement.appendChild(codeButton);
  }
  createTitle(parentElement){
    let createTitle = document.createElement("div");
    setAttributes(createTitle, {class: "projectTitle"});
    createTitle.innerHTML = /*Need to access the Title  in object*/;
    parentElement.appendChild(createTitle);
  }
  createInfo(card){
    let createInfo = document.createElement("p");
    createInfo.innerHTML = /*Need to access the info in object */;
    parentElement.appendChild(createInfo);
  }

  render() {
    document.getElementById("projects")
  }
}
let ourApp = new App();
ourApp.render();
