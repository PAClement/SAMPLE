let ironman = 2;
let spiderman = 4;
let captainamerica = 5;
let thor = 7;
const thanos = 255;

let tour = 1;
let globalForce = (ironman*3+10) + (spiderman*4+5) + (captainamerica*3+7) + (thor*4+20);
let akiletour = 1;

while(globalForce < thanos){
    switch (akiletour){
        case 1:
            ironman++
            akiletour++
            break;
        case 2:
            spiderman++
            akiletour++
            break;
        case 3:
            captainamerica++
            akiletour++
            break;
        case 4:
            thor++
            akiletour = 1;
            break;
    }
    globalForce = (ironman*3+10) + (spiderman*4+5) + (captainamerica*3+7) + (thor*4+20);
    tour++
}

console.log(tour)