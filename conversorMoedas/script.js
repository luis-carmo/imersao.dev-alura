function converterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);

    var valorEmRealNumerico = valorEmDolarNumerico * 5.24;
    var valorEmRealNumerico =valorEmRealNumerico.toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em real é R$ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function converterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
    console.log(valorEmEuroNumerico);


    var valorEmRealNumerico = valorEmEuroNumerico * 6.19;
    var valorEmRealNumerico =valorEmRealNumerico.toFixed(2)



    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em real é R$ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
}
console.log("Passei por aqui");