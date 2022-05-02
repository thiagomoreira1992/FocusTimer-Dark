export default function(){

    const forest = new Audio("audios/Floresta.wav");
    
    const rain = new Audio('audios/Chuva.wav');
    
    const coffe = new Audio ('audios/Cafeteria.wav');
    
    const fireplace = new Audio ('audios/Lareira.wav');

    forest.loop = true;

    rain.loop = true;

    coffe.loop = true;

    fireplace.loop = true;


    return{
        forest,
        rain,
        coffe,
        fireplace
    }


}