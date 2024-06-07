//primeiro é criada uma função genérica que irá reproduzir o áudio cujo id for dado como parâmetro
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//criaremos agora uma lista com todos os buttons  
const listaDeTeclas = document.querySelectorAll('.tecla')

//o nosso vai ter um valor inicial de zero
let contador = 0

//é criado um loop while que vai percorrer toda a lista de buttons 
while (contador < listaDeTeclas.length) {
    //a tecla vai ser selecionada através do seu índice na lista criada previamente
    //ex. tecla = listaDeTeclas[0] = <button class="tecla tecla_pom">Pom</button>
    const tecla = listaDeTeclas[contador]
    console.log(tecla)

    //O nome da classe da tecla registrada
    //ex. instrumento = tecla_pom (obs. [0]=tecla [1]=tecla_pom, já que existem duas classes)
    const instrumento = tecla.classList[1]
    console.log(instrumento)

    //Criará uma variável que é uma string que varia de valores, retornando um id diferente à cada contagem
    // idAudio = "#som_tecla_pom"
    const idAudio = `#som_${instrumento}`
    console.log(idAudio)

    //ao clicar na tecla(tecla.onclick) a função que toca o som será reproduzida com o parâmetro do seu id correspondente
    tecla.onclick = function() {
        tocaSom(idAudio)
    }

    // +1 é adicionado ao contador, que permitirá que o loop se repita ate todos os elementos da lista entrem no loop
    contador++

    
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}