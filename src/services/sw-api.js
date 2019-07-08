export function allShipsPageOne(){
    const endpoint = 'https://swapi.co/api/starships/?page=1';
    return fetch(endpoint, {mode: "cors"}).then(res => res.json());
}

export function allShipsPageTwo(){
    const endpoint = 'https://swapi.co/api/starships/?page=2';
    return fetch(endpoint, {mode: "cors"}).then(res => res.json());
}

export function allShipsPageThree(){
    const endpoint = 'https://swapi.co/api/starships/?page=3';
    return fetch(endpoint, {mode: "cors"}).then(res => res.json());
}

export function allShipsPageFour(){
    const endpoint = 'https://swapi.co/api/starships/?page=4';
    return fetch(endpoint, {mode: "cors"}).then(res => res.json());
}

export function getPilot(url){
    const endpoint = url;
    return fetch(endpoint, {mode:"cors"}).then(res=>res.json());
}


// const URL_BASE  = `https://swapi.co/api/starships/?page=$`

// function getShips (base, num, mode) {
//     let url = `${base}${num}`
//     return fetch(url, mode).then(res => res.json)
// }
