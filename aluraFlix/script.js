var listCharacters = [];

function addCharacter() {
  var characterLink = document.getElementById("link").value;
  listCharacters.push(characterLink);
  var body = document.body;
  body.innerHTML += "<img src=" + characterLink + ">";
}