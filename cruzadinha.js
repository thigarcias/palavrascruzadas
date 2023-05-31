
const gradeContainer = document.getElementById("gradeContainer");

var grade = [];
var contador = 1;
let palavra = ['DUAL CORE', 'REGISTRADORES', 'I5', 'MEMÓRIA DE MASSA', 'I7', 'DATA BUS'];
let palavraDual = [0, 1, 2, 4, 5, 6, 7, 8];
var palavrasIndices = [palavraDual];

function criarGrade() {
    for (var x = 0; x < 20; x++) {
        var linha = [];
        for (var y = 0; y < 16; y++) {
            linha.push(contador);
            gradeContainer.innerHTML += `<div class="gradeItem ${contador}"><span class="palavrasTexto"></span></div>`;
            contador++;
        }
        grade.push(linha);
    }

    const elementos = document.querySelectorAll(".gradeItem");
    const texto = document.querySelectorAll(".palavrasTexto");


    for (var i = 0; i < palavrasIndices.length; i++) {
        var palavraIndices = palavrasIndices[i];
        var palavraAtual = palavra[i];

        for (var j = 0; j < palavraIndices.length; j++) {
            var indice = palavraIndices[j];

            elementos[indice].classList.add('tem');
            texto[indice].classList.add('hidden');
            texto[indice].innerHTML = palavraAtual.charAt(j);
        }
    }
}

function verificarPalavras(palavraEscrita) {

    for (var p = 1; p < palavra.length; p++) {
        if (palavraEscrita == palavra[p]) {
            mostrarPalavra()
        } else {
            alert("Está incorreto!")
        }
    }
}

function mostrarPalavra() {
    const texto = document.querySelectorAll(".palavrasTexto");
    const elementos = document.querySelectorAll(".gradeItem");

    for (var i = 0; i < palavrasIndices.length; i++) {
        var palavraIndices = palavrasIndices[i];

        for (var j = 0; j < palavraIndices.length; j++) {
            var indice = palavraIndices[j];

            texto[indice].classList.remove('hidden');
            elementos[indice].classList.add('correto');

        }
    }
}


function ver() {
    var teste = teste.value
    if (teste == "I7") {
        var palavraEscrita = teste
        verificarPalavras(palavraEscrita)
    }
}



