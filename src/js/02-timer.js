// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]')
console.log(btnStart)
const input = document.querySelector('input[type="text"]')

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };


const startTimer = () => {
console.log("first")
}

btnStart.addEventListener('click', startTimer)


