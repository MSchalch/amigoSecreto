let listaDeAmigos = [];
let listaDeAmigosTemp = [];
let listaDeAmigosFinal = [];
let amigo;
let numAmigos;
let temp = 0;
let numRepetido = false;

function gerarNumeroAleatorio(numAmigos) {
    let numeroEscolhido = parseInt(Math.random() * numAmigos);
    return numeroEscolhido;
}

function adicionarAmigo(){
    amigo = document.getElementById('amigo').value;
    if(amigo == ""){
        alert("Por favor, preencha o campo antes de clicar em Adicionar.");
    }else{
        if(listaDeAmigos.indexOf(amigo)== -1){
            listaDeAmigos.push(amigo);
            document.getElementById('amigo').value = "";
        }else{
            alert("já existe o nome "+ amigo + " na lista de participantes, por favor digite um nome diferente.");
        }
    }
}

function sortearAmigo(){
    if(listaDeAmigos.length < 4){
        alert("Numero insuficiente de participantes, para realizar o sorteio é necessário pelo menos 4 participantes.");
    }else{
        numAmigos = listaDeAmigos.length;
        do{        
            listaDeAmigosTemp = listaDeAmigos.slice();
            numRepetido = false;
            for(x=0;x<numAmigos;x++){
                temp = gerarNumeroAleatorio(numAmigos-x);
                listaDeAmigosFinal[x] = listaDeAmigosTemp[temp];
                listaDeAmigosTemp.splice(temp,1);
                if(listaDeAmigosFinal[x] == listaDeAmigos[x]){
                    numRepetido = true;
                    break;
                }
            }
        }while(numRepetido);
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        for(let i = 0; i <listaDeAmigos.length; i++){
            const itemLista = document.createElement("li");
            itemLista.textContent = listaDeAmigos[i] + "   -->  ";
            lista.appendChild(itemLista);
        }
        const listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML = "";
        for(let i = 0; i <listaDeAmigos.length; i++){
            const itemLista = document.createElement("li");
            itemLista.textContent = listaDeAmigosFinal[i];
            listaResultado.appendChild(itemLista);
        }
    }
}

function novoRegistro(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    listaDeAmigos.splice(0,numAmigos);
}