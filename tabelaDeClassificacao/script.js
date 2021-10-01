var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var jogadores = [rafa, paulo, gui];

paulo.pontos = calculaPontos(paulo);
rafa.pontos = calculaPontos(rafa);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>" + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  for (j = 0; j < jogadores.length; j++) {
    var jogador = jogadores[j];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
  }
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.derrotas--;
  exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

//DESAFIO 1: Sempre que aumentamos o empate em alguém,
//           não aumenta em outra pessoa. Seria interessante
//           fazer essa lógica do empate também aumentar com
//           os outros jogadores.
//DESAFIO 2: Quando você tem uma derrota os outros jogadores
//           ganham uma vitória automaticamente, seria interessante.
//DESAFIO 3: Como tem mais de dois jogadores, acho que seria legal
//           pelo menos validar, verificar se a quantidade de empates
//           está fazendo sentido, se a soma das vitórias está igual à
//           soma das derrotas e assim por diante. Não faria sentido, por
//           exemplo, uma pessoa ter 10 empates, outra ter 0 e outra 2.
//DESAFIO 4: Eu tenho mais um desafio, veio uma ideia enquanto vocês estavam
//           conversando. Nós vimos, com base nas aulas anteriores, que é possível
//           trabalhar com imagens. E se colocássemos uma imagem para cada jogador
//           também? É um exercício bacana
//DESAFIO 5: Muito legal. Outra coisa que dá para fazer por aqui é adicionar outro
//           jogador por meio de um botão e um input, você coloca o nome e clica em
//           "Adicionar jogador", criando uma linha nova (aquele tr que a gente viu)
//           com todas as informações zeradas. Assim você poderá adicionar quantas
//           pessoas quiser, só incluindo o nome dela.
//DESAFIO 6: Desafio principal é você customizar essa tabela de classificação para
//           o seu sistema preferido, para o seu jogo, seja League of Legends, Warcraft,
//           Overwatch, truco, o que for, e que faça bastante sentido para você. Você pode
//           levar isso muito longe, inclusive fazendo o jogo ser aqui dentro e gerando a
//           tabela de classificação. O limite é a sua criatividade, e nós estamos esperando
//           para ver o que vocês vão apresentar.
