let listaAmigos = [];
let listaSorteio = [];
let incluidos = document.getElementById('lista-amigos');
let resultado = document.getElementById('lista-sorteio');

function adicionar() {
    let nome = document.getElementById('nome-amigo').value.trim();

    if (listaAmigos.includes(nome)) {
        alert('Este nome já foi adicionado, adicione o sobrenome ou mude o nome desejado');
    } else if (!nome) {
        alert('Escreva um nome para adicionar!')
    } else {
        listaAmigos.push(nome);
        listaSorteio.push(nome);
    
        incluidos.innerHTML = listaAmigos.join(', ');
        document.getElementById('nome-amigo').value = '';
    }
}

function reiniciar() {
    listaAmigos = [];
    listaSorteio = [];
    incluidos.innerHTML = '';
    resultado.innerHTML = '';
}

function sortear(){
    resultado.innerHTML = '';

    if (listaAmigos.length >= 3) {
            // ⇊ forma feita por mim ⇊
    embaralhar(listaSorteio);

    for (let i = 0; i < listaAmigos.length; i++) {
        resultado.innerHTML = `${resultado.innerHTML} ${listaAmigos[i]} → ${listaSorteio[i]}<br>`;
    }

    // ⇊ forma feita pelo curso ⇊
    // embaralhar(listaAmigos);
    // for (let i = 0; i < listaAmigos.length - 1; i++) {
    //     if (i == listaAmigos.length - 1) {
    //         resultado.innerHTML = `${resultado.innerHTML} ${listaAmigos[i]} ⇒ ${listaAmigos[0]}`;
    //     } else {
    //         resultado.innerHTML = `${resultado.innerHTML} ${listaAmigos[i]} ⇒ ${listaAmigos[i + 1]}<br>`;
    //     }
    // }
    } else {
        alert('Adicione ao menos 3 nomes para sortear');
    }
}


function embaralhar(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}
