//seleciona o botão e o parágrafo de informações da ong
const botaoInformacao = document.getElementById("botao-informacao");
const informacaoOng = document.getElementById("informacao-ong");

//função para mostrar ou ocultar as informaçoes
function alternarInformacao(){

    if (informacaoOng.style.display == "none"){

        informacaoOng.style.display = "block";
        botaoInformacao.textContent = "Ocultar informações";

    } 
    
    else{
        informacaoOng.style.display = "none";
        botaoInformacao.textContent = "Conheça nossa iniciativa";
    }
}

//registra o evento clique no botão
botaoInformacao.addEventListener("click", alternarInformacao);
