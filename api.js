//function for adding various Attributes
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

//create a loop over the projects and that is how they are going to be created
