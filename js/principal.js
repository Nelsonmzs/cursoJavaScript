// Alterando o Titulo da pagina
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Exibindo o primeiro paciente
var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

// Pegando apenas alguns dos valores atribuidos ao paciente
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
// mostrando valor no console 
console.log(peso);

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
// mostrando valor no console
console.log(altura);

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 400){
	console.log("Peso Inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
}

if(altura <= 0 || altura >= 3.00){
	console.log("Altura Inválida!");
	alturaValida = false;
    tdImc.textContent = "Altura Inválida";
}

// Se o peso e altura são validos:
if(pesoValido && alturaValida){
var imc = calculaImc(peso,altura);
tdImc.textContent = imc;
}

function calculaImc(peso,altura){
	var imc = 0
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}
