export default function(){

    const forest = new Audio("audios/Floresta.wav");
    
    const rain = new Audio('audios/Chuva.wav');
    
    const coffe = new Audio ('audios/Cafeteria.wav');
    
    const fireplace = new Audio ('audios/Lareira.wav');
    
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    forest.loop = true;

    rain.loop = true;

    coffe.loop = true;

    fireplace.loop = true;

    function timeEnd(){
        kitchenTimer.play();
    }


    return{
        forest,
        rain,
        coffe,
        fireplace,
        timeEnd
    }


}