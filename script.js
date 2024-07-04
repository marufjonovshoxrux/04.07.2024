import {
    createBox
} from "./components/box.js";
import {
    getTimes
} from "./js/utils.js";

const btn = document.querySelector('.btn');

btn.onclick = () => {
    const input = document.querySelector('input');
    const inputText = input.value;

    if (inputText.trim() === "") {
        return;
    }

    const times = getTimes();
    const boxElement = createBox(inputText, times);

    const container = document.querySelector('.container');
    container.append(boxElement);

    btn.classList.toggle('active-btn');

   
    input.value = "";
};