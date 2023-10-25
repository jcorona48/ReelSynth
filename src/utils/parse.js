

export function parseDuration(min){
    // Esta funcion recibe la duracion en minutos y debe convertirlo a horas y minutos

    // Ejemplo: 125 minutos debe retornar 2h 5m

    // Tu código aca:

    let horas = Math.floor(min / 60);
    let minutos = min % 60;

    if(horas === 0){
        return `${minutos}m`;
    }
    return `${horas}h ${minutos}m`;
}

export function limitDescription(text){
    // Esta funcion recibira un texto y debe devolverlo con un maximo de 200 caracteres y con puntos suspensivos al final

    text = text.slice(0, 150);
    return `${text}...`;

}


export function parseRating(rate){

    let estrellas = [];
    let i = 0;
    let j = 0;

    while(i < Math.floor(rate)){
        estrellas.push(1);
        i++;
    }

    if(rate % 1 !== 0){
        estrellas.push(0.5);
        j++;
    }

    while(j < 5 - i){
        estrellas.push(0);
        j++;
    }

    return estrellas;
}


export default {
    parseDuration,
    limitDescription,
    parseRating
}