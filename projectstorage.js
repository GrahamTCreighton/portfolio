/* segun nico: 
Creas tu array de objetos con la informacion y voy recorriendola mostrandola 
entonces cada vez que se agregue nueva info aparece directamente en el css de la web

segun amanda:
Crear un objeto que contenga los proyectos y luego lo leo de ahi
*/

let projectCard = {
  1: {
    image: "images/projectsample.png",
    title: "Portfolio",
    info: "Information about the project goes here",
    linkButton: "http:www.google.com",
    codeButton: "https://github.com/GrahamTCreighton/portfolio.git",
  },
  2: {
    image: "images/projectsample.png",
    title: "Portfolio",
    info: "Information about the project goes here",
    linkButton: "http:www.google.com",
    codeButton: "https://github.com/GrahamTCreighton/portfolio.git",
  },
};

export default {
  projectCard,
};
// how can I export projectcard if other one is default //