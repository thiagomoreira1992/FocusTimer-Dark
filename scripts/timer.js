import { displayMinutes, displaySeconds } from "./elements.js";
import Sounds from './sounds.js'
import Controls from "./controls.js";
import { buttonPlay, buttonPause } from "./elements.js";

const controls = Controls({buttonPlay, buttonPause})

const sound = Sounds();

export default function Timer({displayMinutes, displaySeconds}) {


    let timeout;
    let minutes = Number(displayMinutes.textContent);

    function updateDisplay(altMinutes, seconds) {
        altMinutes = altMinutes === undefined ? minutes : altMinutes;
        seconds = seconds === undefined ? 0 : seconds;
        displayMinutes.textContent = String(altMinutes).padStart(2, '0');
        displaySeconds.textContent = String(seconds).padStart(2, '0');
    }

    function reset() {
        clearTimeout(timeout);
        updateDisplay(minutes, 0);
    }

    function countDown() {
        timeout = setTimeout(function () {
            let seconds =  Number(displaySeconds.textContent);
            let minutes = Number(displayMinutes.textContent);
            let finished = minutes <= 0 && seconds <=0;

            updateDisplay(minutes, 0);

            if(finished){
                reset();
                controls.resetControls();
                updateDisplay();
                sound.timeEnd();
                return;
            }

            if(seconds <= 0 )
            {
                seconds = 60;
                --minutes;
            }

            updateDisplay(minutes, String(seconds - 1));
            countDown();
        }, 1000)
    }

    function hold(){
        clearTimeout(timeout);
    }

    function updateMinutes(altMinutes) {
        minutes = altMinutes
        updateDisplay(altMinutes, 0);
      }

    return{
        updateDisplay,
        reset,
        countDown,
        hold,
        updateMinutes
    }
}
