const botonIzquierdo = document.getElementById("botonUno");
const botonDerecho = document.getElementById("botonDos");
const caja = document.getElementById("caja");


botonDerecho.addEventListener("click",function(){  
    caja.classList.add("rojo");
});

botonIzquierdo.addEventListener("click",function(){
    caja.classList.remove("rojo");
    
})






