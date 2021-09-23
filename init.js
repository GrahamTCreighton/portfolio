import script from './script.js'
import projectCardApp from './projectCardApp.js'

// we store the options of the sidebar in an array, then we can add an option 
// only here and it will render automaticly without having to touch html at all
const sidebarLinks = [{
  caption: ' Home',
  iconClassNames: ['fa', 'fa-fw', 'fa-home'],
  href: '#home',
  onClickCallback: () => script.hideAndShow('home')
},
{
  caption: ' Projects',
  iconClassNames: ['fas', 'fa-laptop-code'],
  href: '#projects',
  onClickCallback: () => script.hideAndShow('projects')
},
{
  caption: ' CV and Resume',
  iconClassNames: ['fas', 'fa-laptop-code'],
  href: 'images/trialCV.pdf',
  target: '_blank',
},
{
  caption: ' Contact',
  iconClassNames: ['fas', 'fa-phone-alt'],
  href: '#contact',
  onClickCallback: () => script.hideAndShow('contact')
}]

//add sidebar content (moved here from the html because we need access to the script functions)
const sidebarContainer = window.document.getElementById('sidebar')

function getSidebarLink(linkConfig) {
  const icon = window.document.createElement('i')
  icon.classList.add(...linkConfig.iconClassNames);
  const linkElement = window.document.createElement('a')
  
  linkElement.href = linkConfig.href
  linkElement.innerText = linkConfig.caption
  if(linkConfig.onclick) {
    linkElement.onclick = linkConfig.onClickCallback
  }
  if(linkConfig.target){ 
    linkElement.target = linkConfig.target
  }
  linkElement.prepend(icon)
  
  return linkElement;
}

sidebarLinks.forEach(link => {
  const linkElement = getSidebarLink(link);
  sidebarContainer.appendChild(linkElement)
})

// add darkmode button to sidebar
const buttonElement = window.document.createElement('button')
buttonElement.type = 'button'
buttonElement.id = 'dmbutton'
buttonElement.onclick = () => script.toggleDarkMode()
buttonElement.textContent = 'Dark Mode'

sidebarContainer.appendChild(buttonElement)


// apply dark mode if needed
const mode = localStorage.getItem("dark-mode");
if (mode == "true") {
  const element = document.body;
  element.classList.add("dark-mode");
  const myImage = document.getElementById("signature");
  myImage.setAttribute("src", "images/signaturewhite.png");
}


//add projects
new projectCardApp()

script.hideAndShow("home");
