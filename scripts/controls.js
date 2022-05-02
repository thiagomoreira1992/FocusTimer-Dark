import Sounds from './sounds.js';

const sounds = Sounds();

const root = document.documentElement;

export default function Controls({
    buttonPlay,
    buttonPause,
    buttonSound1,
    buttonSound2,
    buttonSound3,
    buttonSound4,
    displayMinutes,
    timer,
    buttonDark,
    buttonLight
}) {

    function play() {
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
    }

    function pause() {
        buttonPause.classList.add('hide');
        buttonPlay.classList.remove('hide');
    }

    function stop() {
        buttonPause.classList.add('hide');
        buttonPlay.classList.remove('hide');
    }

    function resetControls(){
        buttonPause.classList.add('hide');
        buttonPlay.classList.remove('hide');
    }

    function increment() {
        if (displayMinutes.textContent >= 5) {
            timer.updateMinutes(String(Number(displayMinutes.textContent) + 5).padStart(2, '0'));
        } else if (displayMinutes.textContent < 5 && displayMinutes.textContent >= 1) {
            timer.updateMinutes(String(Number(displayMinutes.textContent) + 1).padStart(2, '0'));
        }
    }

    function decrement() {
        if (displayMinutes.textContent > 5) {
            timer.updateMinutes(String(Number(displayMinutes.textContent) - 5).padStart(2, '0'));
        } else if (displayMinutes.textContent <= 5 && displayMinutes.textContent > 1) {
            timer.updateMinutes(String(Number(displayMinutes.textContent) - 1).padStart(2, '0'));

        }
    }


    let sound;


    function sound1() {
        if (sound === 1) {
            sound = 0;
            resetSoundButton();
            sounds.forest.pause();
        } else {
            sound = 1;
            resetSoundButton();
            buttonSound1.classList.add('active');
            resetSounds();
            sounds.forest.play();
        }
    }

    function sound2() {
        if (sound === 2) {
            sound = 0;
            resetSoundButton();
            sounds.rain.pause();
        } else {
            sound = 2;
            resetSoundButton();
            buttonSound2.classList.add('active');
            resetSounds();
            sounds.rain.play();
        }
    }

    function sound3() {
        if (sound === 3) {
            sound = 0;
            resetSoundButton();
            sounds.coffe.pause();
        } else {
            sound = 3;
            resetSoundButton();
            buttonSound3.classList.add('active');
            resetSounds();
            sounds.coffe.play();
        }
    }

    function sound4() {
        if (sound === 4) {
            sound = 0;
            resetSoundButton();
            sounds.fireplace.pause();
        } else {
            sound = 4;
            resetSoundButton();
            buttonSound4.classList.add('active');
            resetSounds();
            sounds.fireplace.play();
        }
    }

    function resetSoundButton() {
        buttonSound1.classList.remove('active')
        buttonSound2.classList.remove('active')
        buttonSound3.classList.remove('active')
        buttonSound4.classList.remove('active')
    }

    function resetSounds(){
        sounds.forest.pause();
        sounds.rain.pause();
        sounds.coffe.pause();
        sounds.fireplace.pause();
    }

    function volumeSound1(input){
        sounds.forest.volume= input;
        sounds.rain.volume= input;
        sounds.coffe.volume= input;
        sounds.fireplace.volume= input;
    }

    function lightTheme(){
        buttonDark.classList.add('hide');
        buttonLight.classList.remove('hide');
        root.style.setProperty('--bg-color', '#fff')
        root.style.setProperty('--bg-bt-color', '#e1e1e6')
        root.style.setProperty('--fill-color', '#323238');
        root.style.setProperty('--bg-bt-active',  '#02799D');
        root.style.setProperty('--fill-active', '#FFFFFF');
        root.style.setProperty('--fc-primary', '#323238');
    }
    function darkTheme(){
        buttonDark.classList.remove('hide');
        buttonLight.classList.add('hide');
        root.style.setProperty('--bg-color', '#121214');
        root.style.setProperty('--bg-bt-color', '#29292E');
        root.style.setProperty('--fill-color', '#C4C4CC');
        root.style.setProperty('--bg-bt-active',  '#0A3442');
        root.style.setProperty('--fill-active', '#FFFFFF');
        root.style.setProperty('--fc-primary', '#fff');
    }
    

    return {
        play,
        pause,
        stop,
        resetControls,
        increment,
        decrement,
        sound1,
        sound2,
        sound3,
        sound4,
        volumeSound1,
        lightTheme,
        darkTheme
    }
}