const coups = 'PCFPFFPPPCPCCCCFPCFFP';
let result = '';

for (let i =0 ; i < coups.length; i++){

    switch (coups[i]){

        case "P":
            result += "F"
        break;
        case "F":
            result += "C"

            break;
        case "C":
            result += "P"
            break;
    }
}

console.log(result)