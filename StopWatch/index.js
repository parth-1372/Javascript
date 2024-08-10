const timing = document.querySelector(".stopwatch");

let second = 0;
let minute = 0;
let hour = 0;
let intervalId;
const startstopwatch = () => {
    intervalId = setInterval(() => {
        second = second + 1;
        if (second == 60) {
            second = 0;
            minute = minute + 1;
        }
        if (minute == 60) {
            hour = hour + 1;
            minute = 0;
        }

        let tempTiming = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
        timing.innerText = tempTiming;
    }, 1000);
}


const stopstopwatch = () => {
    clearInterval(intervalId);
}

