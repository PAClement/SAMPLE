const steps = '_SES_';
let hp = 100;
let min = 0;
let sec = 0;


for (let i = 0; i < steps.length; i++) {

    switch (steps[i]) {
        case "_":
            hp += 5;
            if (hp > 100) hp = 100;
            sec += 10;
            break;
        case "S":
            hp -= 10;
            sec += 10;
            break;
        case "H":
            hp -= 25;
            sec += 30;
            break;
        case "T":
            hp -= 50;
            min += 2;
            break;
        case "E":
            hp -= 100;
            break;
    }

    if (hp < 0){

        min += 5
        hp = 100;
    }

    if(sec > 60){
        sec =  sec - 60
        min++;
    }
}

console.log(`${min}min_${sec}sec_${hp}hp`);