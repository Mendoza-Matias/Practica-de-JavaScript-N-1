//Declaro las constantes y variable del DOM
//Se declaran constantes siempre, a no ser de que necesites un valor varible
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const boton = document.querySelector("#boton");
//En este caso, resultado es variable, ya que cambia su valor
//Se usa let ya que var contiene ciertas propiedades que pueden afectar al código
let resultado = document.querySelector("#resultado")
//Declaro las variables
let nombreUsuario;
let apellidoUsuario;
let edadUsuario;
//Creo una función datos que detecta si hay texto o no.
function datos(){
    //si no hay valores, se le avisa al usuario que ingrese los datos que faltan
    if(nombre.value == "" || apellido.value == "" || edad.value == ""){
        resultado.innerHTML = "Ingresa el valor que falta"
        alert("Gracias por venir")
        //Y si hay datos, se le da valor a las variables y se las muestra en pantalla.
    }else{
        alert("Gracias por venir")
        nombreUsuario = nombre.value
        apellidoUsuario = apellido.value
        edadUsuario = edad.value
        console.log(nombreUsuario, apellidoUsuario, edadUsuario)
        resultado.innerHTML = `${nombreUsuario} ${apellidoUsuario} y tu edad es ${edadUsuario} años`        
    }
}
//Agrega un evento de escucha al botón, para que cuando se haga click, se realice la función
boton.addEventListener("click",() => {
    //La función anonima, llama a la función datos
    datos();
});


//Función común
//Funcion valor (parametro o parametros => param1, param2, param3...){
// Lógica
//}


//Función flecha
// const funcionFlecha = (parametro o parametros) => {
    //Lógica
// }


