const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonIncrement = document.querySelector('.increment');
const buttonDecrement = document.querySelector('.decrement');
const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');

const buttonSound1 = [document.querySelector('.sound1'), document.querySelector('.button-wrapper1')];
const buttonSound2 = [document.querySelector('.sound2'), document.querySelector('.button-wrapper2')];
const buttonSound3 = [document.querySelector('.sound3'), document.querySelector('.button-wrapper3')];
const buttonSound4 = [document.querySelector('.sound4'), document.querySelector('.button-wrapper4')];


const buttonLight = document.querySelector('.light');
const buttonDark = document.querySelector('.dark');

const rangeSound = document.getElementById('volume');


export {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrement,
    buttonDecrement,
    displayMinutes,
    displaySeconds,
    buttonSound1,
    buttonSound2,
    buttonSound3,
    buttonSound4,
    buttonLight,
    buttonDark,
    rangeSound
}