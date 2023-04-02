const joueurs = [17, 28, 41, 39, 50, 30, 20, 2, 54, 47,
    52, 15, 23, 55, 14, 3, 35, 9, 6,
    5, 12, 59, 18, 11, 32, 53, 36, 25, 38, 51, 60];
const bufferJoueurs = [...joueurs].sort((a,b)=>a-b);
let tab = [];

for(let i = bufferJoueurs.length - 1; i >= bufferJoueurs.length - 11 ; i--){

    tab.push(joueurs.indexOf(bufferJoueurs[i]));
}

console.log(tab.join("-"))