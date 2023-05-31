
const gradeContainer = document.getElementById("gradeContainer");

var grade = [];
var contador = 1;
let palavra = ['DUAL CORE', 'REGISTRADORES', 'I5', 'MEMÓRIA DE MASSA', 'I7', 'DATA BUS'];
let palavraDual = [9, 24, 39, 54, 69, 84, 99, 114, 129];
let palavraRegis = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
let palavraI5 = [35, 50];
let palavraMemoria = [28, 43, 58, 73, 88, 103, 118, 133, 148, 163, 178, 193, 208, 223, 238, 253];
let palavraI7 = [103, 104];
let palavraBus = [231, 232, 233, 234, 235, 236, 237]
var palavrasIndices = [palavraDual, palavraRegis, palavraI5, palavraMemoria, palavraI7, palavraBus];

function criarGrade() {
    for (var x = 0; x < 17; x++) {
        var linha = [];
        for (var y = 0; y < 15; y++) {
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
    
    for (var p = 1; p < palavra; p++){
        if (palavraEscrita == palavra[p]){
          mostrarPalavra()  
        } else{
            alert("Está incorreto!")
        }
    }
    
  
  function mostrarPalavra(){  
    const texto = document.querySelectorAll(".palavrasTexto");

    for (var i = 0; i < palavrasIndices.length; i++) {
        var palavraIndices = palavrasIndices[i];
        
        for (var j = 0; j < palavraIndices.length; j++) {
            var indice = palavraIndices[j];
            
            texto[indice].classList.remove('hidden');
            texto[indice].classList.add('correto');
            
        }
    }
}


function ver(){
    var flash = document.getElementById("i_flash")
    if (flash.value == "I7"){
        var palavraEscrita = flash.value
        verificarPalavras(palavraEscrita)
    }
}



