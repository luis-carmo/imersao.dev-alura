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