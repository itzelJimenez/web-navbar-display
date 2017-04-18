//Etiquetas de eliminar "x"
var botones =document.getElementsByClassName("cerrar");
//Imágenes
var imagenes = document.getElementsByClassName("img");
//Botones de opciones
var origen = document.getElementById("boton1");
var extincion = document.getElementById("boton2");
var restaurar = document.getElementById("boton3");
//Secciones
var origin = document.getElementById("origen");
var secExt = document.getElementById("extincion");
//Contador clicks
var click=1;
//Declaración de funciones
for(var i = 0; i<botones.length; i++){
 botones[i].addEventListener("click",eliminar)
}

function eliminar(){
	this.previousSibling.style.visibility="hidden";
	this.style.display="none"
}
function rest(){
	for(var i=0; i<imagenes.length;i++){
		imagenes[i].style.visibility="initial";
		imagenes[i].nextSibling.style.display="block";
	}
}
function mostrarOcul1(){
	if(click==1){
		origin.style.visibility="hidden";
		click=click+1;
	}else{
		origin.style.visibility="initial";
		click=1;
	}
}
function mostrarOcul2(){
	if(click==1){
		secExt.style.visibility="hidden";
		click=click+1;
	}else{
		secExt.style.visibility="initial";
		click=1;
	}
}

//Eventos
origen.addEventListener("click", mostrarOcul1);
extincion.addEventListener("click", mostrarOcul2);
restaurar.addEventListener("click", rest);