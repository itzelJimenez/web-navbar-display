//Etiquetas de eliminar "x"
var img1 = document.getElementsByClassName("cerrar")[0];
var img2 = document.getElementsByClassName("cerrar")[1];
var img3 = document.getElementsByClassName("cerrar")[2];
var img4 = document.getElementsByClassName("cerrar")[3];
//Botones de opciones
var origen = document.getElementById("boton1");
var extincion = document.getElementById("boton2");
var restaurar = document.getElementById("boton3");

//Declaración de funciones
function prueba(){
	alert("Funciona")
}
//Eventos
img1.addEventListener("click", prueba);
img2.addEventListener("click", prueba);
img3.addEventListener("click", prueba);
img4.addEventListener("click", prueba);
origen.addEventListener("click", prueba);
extincion.addEventListener("click", prueba);
restaurar.addEventListener("click", prueba);