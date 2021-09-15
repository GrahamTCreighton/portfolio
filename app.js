import setAttributes from "script.js";
import projectCard from "./projectstorage";

class App {
  constructor() {
    this.render;
  }

  createCard() {
    let card = document.createElement("div");
    setAttributes(card, {class:"container"})
    document.getElementById("projects").appendChild(card);
  }
  createImage() {
    let image = document.createElement("img");
    let imgAtt = document.createAttribute("src");
    imgAtt.value =
      projectCard; /*<---stuck, need ideas to access image in different situations*/
    document.getElementsByClassName("container").appendChild(image);
  }
  createLinkButton() {
    let linkButton = document.createElement("a");
    setAttributes(linkButton, { class: "btn1", href: /*stuck need ideas to access link */, target: "_blank" });
    linkButton.innerHTML = "Link";
    document.getElementsByClassName("container").appendChild(linkButton);
  }
  createCodeButton(){
    let codeButton = document.createElement("a");
    setAttributes(codeButton, { class: "btn2", href: /*need ideas how to access link*/,target: "_blank"  });
    linkButton.innerHTML = "Code";
    document.getElementsByClassName("container").appendChild(codeButton);
  }
  createTitle(){
    let createTitle = document.createElement("div");
    setAttributes(createTitle, {class: "projectTitle"});
    createTitle.innerHTML = /*Need to access the Title  in object*/;
    document.getElementsByClassName("container").appendChild(createTitle);
  }
  createInfo(){
    let createInfo = document.createElement("p");
    createInfo.innerHTML = /*Need to access the info in object */;
    document.getElementsByClassName("projectTitle").appendChild(createInfo);
  }
  }
}
