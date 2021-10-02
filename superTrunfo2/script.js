var carta1 = {
  nome: "Aatrox",
  imagem:
    "http://pm1.narvii.com/6969/4cfa27c8dcfd8636337d60e6c1f4a7cb693a9bf8r1-380-380v2_00.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 0,
  },
};
var carta2 = {
  nome: "Mordekaiser",
  imagem:
    "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4d/MordekaiserSquare.png",
  atributos: {
    ataque: 4,
    defesa: 6,
    magia: 8,
  },
};
var carta3 = {
  nome: "Sylas",
  imagem:
    "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/eb/SylasSquare.png",
  atributos: {
    ataque: 1,
    defesa: 4,
    magia: 7,
  },
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
  console.log(cartaMaquina);
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

//function exibirOpcoes() {
//  var opcoes = document.getElementById("opcoes");
//  var opcoesTexto = "";
//  for (var atributo in cartaJogador.atributos) {
//    opcoesTexto +=
//      "<input type ='radio' name='atributo' value='" +
//      atributo +
//      "'>" +
//      atributo;
//  }
//  opcoes.innerHTML = opcoesTexto;
//}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();

  var valorAtributoSelecionadoJogador =
    cartaJogador.atributos[atributoSelecionado];
  var valorAtributoSelecionadoMaquina =
    cartaMaquina.atributos[atributoSelecionado];

  var divResultado = document.getElementById("resultado");

  if (valorAtributoSelecionadoJogador > valorAtributoSelecionadoMaquina) {
    htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
  } else if (
    valorAtributoSelecionadoMaquina > valorAtributoSelecionadoJogador
  ) {
    htmlResultado = "<p class='resultado-final'>Você perdeu!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou!</p>";
  }
  divResultado.innerHTML = htmlResultado;
  exibirCartaMaquina();
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opçoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opçoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opçoesTexto + "</div>";
}
function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opçoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opçoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opçoesTexto + "</div>";
}
