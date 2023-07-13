const btnStart = document.querySelector(`[data-start]`);
const btnStop = document.querySelector(`[data-stop]`);

btnStart.addEventListener(`click`, startSwitchColor );
btnStop.addEventListener(`click`, stopSwitchColor);
const bodyEl = document.querySelector(`body`);
btnStop.disabled = true;

let intervalId = null;
const CHANGE_COLOR_DELAY = 1000;


function startSwitchColor(e) {
    
    intervalId = setInterval(() => { bodyEl.style.backgroundColor = getRandomHexColor(); }, CHANGE_COLOR_DELAY);
    btnStart.disabled = true;
    btnStop.disabled = false;
};

function stopSwitchColor() {
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(intervalId);
    };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}