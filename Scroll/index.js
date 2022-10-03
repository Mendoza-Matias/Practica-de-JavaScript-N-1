//______CUADROS QUE CAMBIAN DE COLOR__(MANEJO DEL DOM)__
const botonIzquierdo = document.getElementById("botonUno");
const botonDerecho = document.getElementById("botonDos");
const caja = document.getElementById("caja");
const colores = ["rojo","verde","azul"]

botonDerecho.addEventListener("click",function(){  
    
    if(caja.classList.contains("rojo")){//Si clase tiene el color rojo
        caja.classList.remove("rojo");  //Entonces remover rojo 
        caja.classList.add("verde");   //Colocar verde
    }else if(caja.classList.contains("verde")){//SINO color verde
        caja.classList.remove("verde");//remover verde 
        caja.classList.add("azul");//Colocar Azul
    }else if(caja.classList.contains("azul")){
        caja.classList.remove("azul");
        caja.classList.add("rojo");
    }else{
        caja.classList.add("rojo");
    }
});

botonIzquierdo.addEventListener("click",function(){
    colores.forEach((color,i)=> //ForEach recorre todo el arreglo de colores por indice
    {console.log(color,i)
    if(caja.classList.contains(color)){
        caja.classList.remove(color)
        switch(i){
            case 0:
                caja.classList.add(colores[2])
            break;
            case i: 
            caja.classList.add(colores[i-1])
            break;
    }
    }})
    
})

/*function cambiarColor(element,x){
    if(element.classList.contains(colores[x])){
        element.classList.remove(colores[x])
        if(typeof colores[x + 1] != undefined){
            element.classList.add(colores[x + 1]);

        }else{
            element.classList.add(colores[0]);
        }
    }
}*/





