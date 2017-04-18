//Etiquetas de eliminar "x"
var botones =document.getElementsByClassName("cerrar");
//Imágenes
var imagenes = document.getElementsByClassName("img");
//Botones de opciones
var origen = document.getElementById("boton1");
var extincion = document.getElementById("boton2");
var restaurar = document.getElementById("boton3");
//Secciones
var secOrigen = document.getElementById("origen");
var secExt = document.getElementById("extincion");

//Declaración de funciones
for(var i = 0; i<botones.length; i++){
 botones[i].addEventListener("click",eliminar)
}

function eliminar(){
	this.previousSibling.style.visibility="hidden";
	this.style.display="none"
}
function restaurar(){

}
function ocultOrig(){
	secOrigen.style.display ="none";
}
function ocultExt(){
	secExt.style.display ="none";
}

//Eventos

origen.addEventListener("click", ocultOrig);
extincion.addEventListener("click", ocultExt);
restaurar.addEventListener("click", restaurar);