var carta1 = {
    nome: "Aatrox",
    atributos: {
      ataque: 8,
      defesa: 7,
      magia: 0
    }
  };
  var carta2 = {
    nome: "Mordekaiser",
    atributos: {
      ataque: 4,
      defesa: 6,
      magia: 8
    }
  };
  var carta3 = {
    nome: "Sylas",
    atributos: {
      ataque: 1,
      defesa: 4,
      magia: 7
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var indiceMaquina = parseInt(Math.random() * 3);
  
    cartaMaquina = cartas[indiceMaquina];
  
    cartas.splice(indiceMaquina, 1);
  
    cartaJogador = cartas[parseInt(Math.random() * 2)];
  
    cartas.push(cartaMaquina);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    console.log(cartaJogador.atributos)
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        '<input type = "radio" name = "atributo" value="' +
        atributo +
        '">' +
        atributo;
      opcoes.innerHTML = opcoesTexto;
    }
  }
  