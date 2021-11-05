var cantidad = 5;
var max = 3;
var min =1;
const myArray = [];
myArray.push(Math.round(Math.random()*(max-min)+1));

while (myArray.length < cantidad){
	myArray.push(Math.round(Math.random()*(max-min)+1));
}

var capturando = [];
function capturar(){
	capturando = document.getElementById('valor').value;
	document.getElementById('valordigitado').innerHTML=capturando;
}

function comparar(){
	var contador = 0;
	if (capturando[0] == myArray[0]){
		document.getElementById('asterisco1').innerHTML=myArray[0];
		contador++;
	}

	if (capturando[1] == myArray[1]){
		document.getElementById('asterisco2').innerHTML=myArray[1];
		contador++;
	}

	if (capturando[2] == myArray[2]){
		document.getElementById('asterisco3').innerHTML=myArray[2];
		contador++;
	}
	if (capturando[3] == myArray[3]){
		document.getElementById('asterisco4').innerHTML=myArray[3];
		contador++;
	}
	if (capturando[4] == myArray[4]){
		document.getElementById('asterisco5').innerHTML=myArray[4];
		contador++;
	}
	if (contador == 5){
		alert("¡¡ Enhorabuena has ganado !!");
	}
}

function combinacion(){
	document.getElementById("combinacion").innerHTML=("la combinacion es : " + myArray);
}

function salida(){
	window.location="salir.html"
}



