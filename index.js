//declarations
let siteName = 'Project';
let author = 'Mateusz Jarosz';
let daysPassed = 1;
let finished = false;

//inputing info

document.getElementById('id_1').innerHTML = `Welcome to ${siteName}`;
document.getElementById('id_2').innerHTML = `The author of ${siteName} is ${author}`;
document.title = siteName;

//let's start button

document.addEventListener('DOMContentLoaded', function() {
  let modal = document.getElementById('myModal');
  let btn = document.getElementById('id_3');
  let span = document.getElementsByClassName('close')[0];

  btn.onclick = function() {
    modal.style.display = 'block';
  }

  span.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});

function processText() {
  var inputText = document.getElementById('textInput').value;
  // Tutaj dodaj kod JavaScript do przetwarzania tekstu
  // np. wywołaj odpowiednie funkcje, analizuj tekst, itp.
  var resultDiv = document.getElementById('result');
  // Poniżej jest tylko przykład, wstaw do tej zmiennej rzeczywiste wyniki
  var result = 'Wyniki przetwarzania: ' + inputText.toUpperCase();
  resultDiv.innerHTML = result;
}