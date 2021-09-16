function calcularMedia() {
  var nota1 = parseFloat(document.getElementById("nota-1").value);
  var nota2 = parseFloat(document.getElementById("nota-2").value);
  var nota3 = parseFloat(document.getElementById("nota-3").value);
  var nota4 = parseFloat(document.getElementById("nota-4").value);
  var resultado = document.getElementById("resultado");

  if (
    (nota1 >= 0) &
    (nota1 <= 10) &
    ((nota2 >= 0) & (nota2 <= 10)) &
    ((nota3 >= 0) & (nota3 <= 10)) &
    ((nota4 >= 0) & (nota4 <= 10))
  ) {
    var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
    notaFinal = notaFinal.toFixed(1);

    if (notaFinal > 6.0) {
      resultado.innerHTML =
        "Sua média foi de " + notaFinal + "<br>Você foi aprovado!";
    } else {
      resultado.innerHTML =
        "Sua média foi de " + notaFinal + "<br>Você foi reprovado!";
    }
  } else {
    resultado.innerHTML = "Insira uma nota válida!";
  }
}
