const gradeContainer = document.getElementById("gradeContainer")
function oi (){
    for(var contador = 1; contador <= 255; contador++){
        if (contador == 10 || contador ==  27 || contador ==  44 || contador ==  61 || contador == 78 || contador ==  95 || contador ==  112 || contador ==  129 || contador ==  146){
            gradeContainer.innerHTML += `<input type: "text" id="gradeItemTem">`
       } else {

           gradeContainer.innerHTML += `<div id="gradeItem">${contador}</div>`
        }

        
    }
}

