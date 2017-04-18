//Etiquetas de eliminar "x"
var img1 = document.getElementsByClassName("cerrar")[0];
var img2 = document.getElementsByClassName("cerrar")[1];
var img3 = document.getElementsByClassName("cerrar")[2];
var img4 = document.getElementsByClassName("cerrar")[3];
//Botones de opciones
var origen = document.getElementById("boton1");
var extincion = document.getElementById("boton2");
var restaurar = document.getElementById("boton3");
//Secciones
var secOrigen = document.getElementById("origen");
var secExt = document.getElementById("extincion");

//Declaración de funciones
function prueba(){
	alert("Funciona");
}
function ocultOrig(){
	secOrigen.style.display ="none";
}
function ocultExt(){
	secExt.style.display ="none";
}
//Eventos
img1.addEventListener("click", prueba);
img2.addEventListener("click", prueba);
img3.addEventListener("click", prueba);
img4.addEventListener("click", prueba);
origen.addEventListener("click", ocultOrig);
extincion.addEventListener("click", ocultExt);
restaurar.addEventListener("click", prueba);