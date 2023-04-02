const types = ['Feu', 'Herbe', 'Eau', 'Feu', 'Air', 'Feu', 'Feu', 'Feu', 'Feu', 'Feu', 'Feu', 'Feu', 'Herbe', 'Herbe', 'Air', 'Herbe', 'Feu', 'Herbe', 'Eau', 'Eau', 'Feu', 'Eau', 'Herbe', 'Feu', 'Herbe', 'Eau', 'Feu', 'Herbe', 'Herbe', 'Feu', 'Feu'];
const rare = ["Air", "Poison", "Glace", "Psychique", "Insecte"];
const teams = []
let fullTeam_counter = 0;

types.forEach(type => {
    if(teams.length > 0){

        for(let i = 0 ; i < teams.length; i++){
            if(!teams[i].includes(type) &&
                teams[i].length < 4 &&
                !teams[i].includes.call(rare, type)){
                teams[i].push(type)
            }
        }
    }
    teams.push([type])
})

teams.forEach(target => {
    if(target.length === 4){
        fullTeam_counter++
    }
})

console.log(teams);
console.log(fullTeam_counter)

