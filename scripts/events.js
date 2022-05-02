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

    buttonSound1[2].addEventListener('input', () =>{
        console.log(buttonSound1[2].value)
        controls.volumeSound1(buttonSound1[2].value);
    })

    buttonSound2[2].addEventListener('input', () =>{
        console.log(buttonSound2[2].value)
        controls.volumeSound2(buttonSound2[2].value);
    })

    buttonSound3[2].addEventListener('input', () =>{
        controls.volumeSound3(buttonSound3[2].value);
        console.log(buttonSound3[2].value)

    })

    buttonSound4[2].addEventListener('input', () =>{
        controls.volumeSound4(buttonSound4[2].value);
        console.log(buttonSound4[2].value)

    })
    
    buttonDark.addEventListener('click', () =>{
        controls.lightTheme();
    })
    
    buttonLight.addEventListener('click', ()=>{
        controls.darkTheme();
    })
}