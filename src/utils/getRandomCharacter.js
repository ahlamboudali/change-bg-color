import data from "../data.js";


const getRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * data.Characters.length)
    return data.Characters[randomIndex];
 };

 export default getRandomCharacter;