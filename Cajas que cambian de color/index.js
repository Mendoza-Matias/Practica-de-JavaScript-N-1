const botonIzquierdo = document.getElementById("botonUno");
const botonDerecho = document.getElementById("botonDos");
const caja = document.getElementById("caja");
const colores = ["rojo","verde","azul"]

botonDerecho.addEventListener("click",function(){  
    
    if(caja.classList.contains("rojo")){
        caja.classList.remove("rojo");
        caja.classList.add("verde");
    }else if(caja.classList.contains("verde")){
        caja.classList.remove("verde");
        caja.classList.add("azul");
    }else if(caja.classList.contains("azul")){
        caja.classList.remove("azul");
        caja.classList.add("rojo");
    }else{
        caja.classList.add("rojo");
    }
});

botonIzquierdo.addEventListener("click",function(){
    cambiar(caja, recorrer);
}   )

function recorrer(element,array){
    for(i in array){
        if(element.classList.contains(array[i])){
            element.classList.remove(colores[i]);
            return i
        }
    }
}
function cambiar(element, callback){
    let i = callback(element, colores);
    if (i == 0){
        element.classList.add(colores[2])
    } 
    else if (i <= 2) {
        element.classList.add(colores[i - 1])
    } 
    else{
        cual = window.prompt('elija un color ?: \n1)rojo \n2)verde \n3)azul ')
        element.classList.add(colores[cual - 1])
    }
}