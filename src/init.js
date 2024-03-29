import dom from "./dom.js";
import getRandomCharacter from "./utils/getRandomCharacter.js";
import changeColor from "./components/changeColor.js";

  //handlers 
const changeColorHandler = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += getRandomCharacter();
    }

 changeColor(color);
};

//listeners 
dom.btn.addEventListener('click', changeColorHandler);