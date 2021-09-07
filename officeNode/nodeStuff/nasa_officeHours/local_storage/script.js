var helloDiv = document.querySelector('.hello-div');
var nameInput = document.querySelector('#name');
var button = document.querySelector('#update-button');

function onPageStart() {
  var storedName = localStorage.getItem('name');

  helloDiv.textContent = storedName;
}

button.addEventListener('click', function (event) {
  event.preventDefault();
  var enteredName = nameInput.value;
  helloDiv.textContent = enteredName;
  localStorage.setItem('name', enteredName);
});

onPageStart();
