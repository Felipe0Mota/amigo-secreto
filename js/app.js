let listaAmigos = [];
let listaSorteio = [];
let incluidos = document.getElementById('lista-amigos');
let resultado = document.getElementById('lista-sorteio');

function adicionar() {
    let nome = document.getElementById('nome-amigo').value.trim();

    if (listaAmigos.includes(nome)) {
        alert('Nome já adicionado');
        return;
    } 
    
    if (!nome) {
        alert('Escreva um nome para adicionar!')
        return;
    }

    listaAmigos.push(nome);
    listaSorteio.push(nome);

    incluidos.innerHTML = listaAmigos.join(', ');
    document.getElementById('nome-amigo').value = '';
}

function reiniciar() {
    listaAmigos = [];
    listaSorteio = [];
    incluidos.innerHTML = '';
    resultado.innerHTML = '';
}

function sortear(){
    resultado.innerHTML = '';

    if (listaAmigos.length < 4) {
        alert('Adicione ao menos 3 nomes para sortear');
        return;
    }

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
