const dessins = ['0:A 6:V 7:V 8:L', '0:J 1:A 6:V 8:V', '0:A 1:A 2:A 6:J 7:V', '0:A 2:L 3:J 6:V 7:V', '0:A 2:A 6:V 7:V', '0:A 3:J 5:L 6:V', '2:L 3:J 6:V', '0:A 5:L 7:V', '1:A 5:L 6:J 8:V', '0:A 2:A 3:J 5:L 6:J 8:L', '2:L 5:L 6:J 8:L', '3:J 7:V 8:L', '0:A 2:A 3:J 5:L 6:J 8:V', '0:J 1:A 2:L 3:J 5:L 6:J', '0:J 6:J 8:L'];let listGrille = []
let result = ''

function nullable(array) {

    for (let i = 0; i < array.length; i++) {

        switch (array[i]) {
            case "A":
                if (array[i + 6] === "V") {
                    array[i] = 0;
                    array[i + 6] = 0;
                }
                break;
            case "J":
                if (array[i + 2] === "L") {
                    array[i] = 0;
                    array[i + 2] = 0;
                }
                break;
        }
    }

    if (array[0] === "A" && array[1] === "A" && array[2] === "A") {
        array[0] = 0;
        array[1] = 0;
        array[2] = 0;
    }
    if (array[0] === "J" && array[3] === "J" && array[6] === "J") {
        array[0] = 0;
        array[3] = 0;
        array[6] = 0;
    }
    if (array[2] === "L" && array[5] === "L" && array[8] === "L") {
        array[2] = 0;
        array[5] = 0;
        array[8] = 0;
    }
    if (array[6] === "V" && array[7] === "V" && array[8] === "V") {
        array[6] = 0;
        array[7] = 0;
        array[8] = 0;
    }

    return array
}

dessins.forEach(dessin => {
    let buffer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let temp = dessin.split(' ');

    for (let i = 0; i < temp.length; i++) {
        let n = temp[i].split(':')
        buffer[parseInt(n[0])] = n[1];
    }
    listGrille.push(nullable(buffer))
})

listGrille.forEach(target => {

    let list = ["A", "V", "J", "L"];
    let reaLlist = ["H", "B", "G", "D"];
    for (let i = 0; i < list.length; i++) {
        for(let j = 0; j < target.length; j++){
            if(target[j] === list[i]){
                result += reaLlist[i];
            }
        }
    }
})
console.log(listGrille)
console.log(result)

