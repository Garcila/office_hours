var counter = document.querySelector('.counter');
var myButton = document.querySelector('.woof');

var myCount = 0;

myButton.addEventListener('click', function () {
  myCount = myCount + 1;
  counter.textContent = '🙂 ' + myCount;
});
