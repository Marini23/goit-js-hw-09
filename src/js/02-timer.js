import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector(`#datetime-picker`);
const btnStart = document.querySelector(`[data-start]`);
let selectedDate = null;
const currentDate = new Date;
btnStart.disabled = true;


const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
    
    selectedDate = selectedDates[0].getTime();
    console.log(selectedDate);
    btnStart.disabled = true;
    if (currentDate > selectedDates[0]) {
        window.alert(`Please choose a date in the future`);
    }
    else {
        btnStart.disabled = false;
    }
    
    },
    
};

const fp = flatpickr(input, options);

console.log(selectedDate);

// const setTimer = () => {
//         selectedDate = selectedDates[0].getTime();
//         timer.start();
//         };

// setTimeout(() => {
//     console.log(selectedDate - currentDate);
// });

btnStart.addEventListener(`click`, onDate);

function onDate(e) {
    
}