//--------------------Dolar------------------------

var valorEmDolarTexto = prompt("Qual o valor do Playstation 4 nos EUA?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.53
var valorEmRealFixado = valorEmReal.toFixed(2)

alert ("Esse seria o valor em Reais usando a conversão atual do Dolar " + "R$" +(valorEmRealFixado))

//---------------------EURO-------------------------

var valorEmEuroTexto = prompt ("LEGAL! Agora quero saber o valor do Playstation na França, qual seria?")

var valorEmEuroNumero = parseFloat(valorEmEuroTexto) 

var valorEmReal = valorEmEuroNumero * 6.58
var valorEmRealFixadoEuro = valorEmReal.toFixed(2)

alert (" Esse seria o valor em Reais usando a conversão atual do Euro "+ " R$" + (valorEmRealFixadoEuro))




//Revisão 
//variáveis var int - float - string 
//alert - parseInt - parseFloat - prompt 
// operações + somar * multiplicar 
// comentário final 