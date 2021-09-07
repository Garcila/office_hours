var result = document.querySelector('.result');
var myButton = document.querySelector('.myButton');
var stopButton = document.querySelector('.stopButton');
var root = document.getElementById('root');

var h1 = document.createElement('h1');
h1.textContent = 'The bestest counter';
root.appendChild(h1);

var myInterval;
var myCount = 0;

myButton.addEventListener('click', function () {
  myInterval = setInterval(function () {
    myCount++;
    result.textContent = myCount;
  }, 1000);
});

stopButton.addEventListener('click', function () {
  clearInterval(myInterval);
});

// if (myCount < 10) {
//   console.log(myCount);
// } else {
//   clearInterval(myInterval);
// }
