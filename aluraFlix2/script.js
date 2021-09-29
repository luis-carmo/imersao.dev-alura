var listCharacters = [];

function addCharacter() {
  var characterLink = document.getElementById("link").value;
  if (characterLink.endsWith(".jpg") || characterLink.endsWith(".png")) {
    listCharacters.push(characterLink);
    characterOnScreen(characterLink);
  } else {
    console.error("URL inválido")
  }
  document.getElementById("link").value = "";
}

function characterOnScreen (characterLink) {
  console.log(characterLink);
  var screen = document.getElementById("characterOnScreen")
  screen.innerHTML += "<img src=" + characterLink + ">";
}
// DESAFIO 1: Criar um botão para remover um filme da lista.
// DESAFIO 2: Colocar na tela o nome do filme, juntamente com o poster.
// DESAFIO 3: Além de fazer os filmes aparecerem na tela, guardá-los em uma lista. 
//            Desta forma, quando o botão "Adicionar Filme" for clicado, o programa imprime os filmes percorrendo a lista do zero.
// DESAFIO 4: Praticar funções na aula do conversor de moedas. Fazer com que o programa devolva o valor para o usuário, utilizando a função return.
// DESAFIO 5: Ainda na aula do conversor de moedas, utilizar radio buttons para que o usuário escolha para qual moeda ele quer fazer a conversão.