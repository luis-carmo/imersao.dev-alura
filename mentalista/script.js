var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado");
  if ((chute >= 0) & (chute <= 10)) {
    if (tentativas > 0) {
      if (chute == numeroSecreto) {
        resultado.innerHTML =
          "Acertou!<br>Agora alteramos o número, tente acertar novamente!";
        numeroSecreto = parseInt(Math.random() * 11);
        tentativas = 3;
      } else if (chute < numeroSecreto) {
        tentativas--;
        if (tentativas == 0) {
          resultado.innerHTML =
            "Você errou e acabaram as chances!<br>O número secreto era: " +
            numeroSecreto +
            "<br>Recarregue a página e tente novamente!";
        } else {
          resultado.innerHTML =
            "Errou!<br>O número secreto é maior!<br>Você tem " +
            tentativas +
            " tentativas!";
        }
      } else if (chute > numeroSecreto) {
        tentativas--;
        if (tentativas == 0) {
          resultado.innerHTML =
            "Você errou e acabaram as chances!<br>O número secreto era: " +
            numeroSecreto +
            "<br>Recarregue a página e tente novamente!";
        } else {
          resultado.innerHTML =
            "Errou!<br>O número secreto é menor!<br>Você tem " +
            tentativas +
            " tentativas!";
        }
      }
    }
  } else {
    resultado.innerHTML = "Insira um número entre 1 e 10!";
  }
}