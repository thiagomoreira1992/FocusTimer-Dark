import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrement,
    buttonDecrement,
    buttonSound1,
    buttonSound2,
    buttonSound3,
    buttonSound4,
    rangeSound,
    buttonLight,
    buttonDark
} from "./elements.js";

export default function Events({controls, timer}){

    buttonPlay.addEventListener('click', function () {
        controls.play();
        timer.countDown();
    })
    
    buttonPause.addEventListener('click', function () {
        controls.pause();
        timer.hold();
    })
    
    buttonStop.addEventListener('click', function () {
        controls.stop();
        timer.reset();
    })
    
    buttonIncrement.addEventListener('click', function () {
        controls.increment();
    })
    
    buttonDecrement.addEventListener('click', function () {
        controls.decrement();
    })
    
    buttonSound1[0].addEventListener('click', function () {
        controls.sound1();
    })
    
    buttonSound2[0].addEventListener('click', function () {
        controls.sound2();
    })
    
    buttonSound3[0].addEventListener('click', function () {
        controls.sound3();
    })
    
    buttonSound4[0].addEventListener('click', function () {
        controls.sound4();
    })
    
    rangeSound.addEventListener('input', () =>{
        controls.volumeSound1(rangeSound.value)
    })
    
    buttonDark.addEventListener('click', () =>{
        controls.lightTheme();
    })
    
    buttonLight.addEventListener('click', ()=>{
        controls.darkTheme();
    })
}