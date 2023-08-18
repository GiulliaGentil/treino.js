const nome = "giullia"

function getEventoAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 2);
    
    if (numeroAleatorio === 0) {
        return "Maratona";
    } else if (numeroAleatorio === 1) {
        return "Triathlon";
    } else {
        return "Pentathlon";
    }
}

let treino = getEventoAleatorio()

function getDiasTreino(treino) {

    if (treino === "Maratona") {
        return "retorne 50 dias";
    } else if (treino === "Triathlon") {
        return "retorno 100 dias";
    } else {
        return "retorne 200 dias"
    }
    
}

function logEvento(nome, treino){
console.log("a " + nome + " vai participar " + treino)
}
logEvento(nome, treino)

let dias = getDiasTreino(treino)

function logTempo(nome, dias){
console.log("a " + nome + " vai se preparar " + dias)
}

logTempo(nome, dias)



