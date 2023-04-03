const flies = ['4;1:9:0', '3;2:7:0', '1;2:9:6', '2;4:3:2',
    '5;3:4:4', '7;1:3:4', '6;2:6:8'];

let spiderEnergy = 80;

let grid = [];

function getSpiderCoordonnee(x,y, array){
    let stateSpider = false;

    array.forEach(flie => {
        let flieTab = flie.split(':');
        if(x === parseInt(flieTab[1]) && y === parseInt(flieTab[2])){
            stateSpider = true;
        }
    })

    return stateSpider;
}

for(let i = 0; i < 10; i++){
    let row = [];
    for(let j = 0; j < 10; j++){
        let stateSpider = getSpiderCoordonnee(i,j, flies);
        let cell = {x: i, y: j, flie: stateSpider};
        row.push(cell);
    }
    grid.push(row);
}

    console.log(grid);
