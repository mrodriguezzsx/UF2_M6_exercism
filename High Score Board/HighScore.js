// Exercici 1
function createScoreboard(){
    this.table['The Best Ever'] = 1000000;
    return table;
}
createScoreboard();

// Exercici 2
function addPlayer(taula, nomJ, punts){
    taula[nomJ]=punts;
    return taula;
}
addPlayer({'Dave Thomas':0}, 'José Valim', 456039);

// Exercici 3
function removePlayer(taula, nomJ){
    delete taula[nomJ];
    return taula;
}
removePlayer({'Dave Thomas':0}, 'Rose Fanaras');

// Exercici 4
function updateScore(taula, nomJ, punts){
    taula[nomJ]+=punts;
    return taula;
}
updateScore({'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73);

// Ejercicio 5
const taulas = {
    'Dave Thomas': 44,
    'Freyja Ćirić': 539,
    'José Valim': 265,
};

function applyMondayBonus(taula){
    for (let i in taula){
        taula[i]+=100;
    }
    return taula;
}
applyMondayBonus(taulas);

// Exercici 6
function normalize(score){
    return 2*score+10;
}

const params = { score: 400, normalizeFunction: normalize};
function normalizeScore(params);