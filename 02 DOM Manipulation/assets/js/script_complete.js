// var fruits = [
//   'Alfalfa Sprouts',
//   'Apple',
//   'Apricot',
//   'Artichoke',
//   'Asian Pear',
//   'Asparagus',
//   'Atemoya',
//   'Avocado',
//   'Bamboo Shoots',
//   'Banana',
//   'Bean Sprouts',
//   'Beans',
//   'Beets',
//   'Belgian Endive',
//   'Bell Peppers',
//   'Bitter Melon',
//   'Blackberries',
//   'Blueberries',
//   'Bok Choy',
//   'Boniato',
//   'Boysenberries',
//   'Broccoflower',
//   'Broccoli',
//   'Brussels Sprouts',
//   'Cabbage',
//   'Cactus Pear',
//   'Cantaloupe',
//   'Carambola',
//   'Carrots',
//   'Casaba Melon',
//   'Cauliflower',
//   'Celery',
//   'Chayote',
//   'Cherimoya',
//   'Cherries',
//   'Coconuts',
//   'Collard Greens',
//   'Corn',
//   'Cranberries',
//   'Cucumber',
//   'Dates',
//   'Dried Plums',
//   'Eggplant',
//   'Endive',
//   'Escarole',
//   'Feijoa',
//   'Fennel',
//   'Figs',
//   'Garlic',
//   'Gooseberries',
//   'Grapefruit',
//   'Grapes',
//   'Green Beans',
//   'Green Onions',
//   'Greens',
//   'Guava',
//   'Hominy',
//   'Honeydew Melon',
//   'Horned Melon',
//   'Iceberg Lettuce',
//   'Jerusalem Artichoke',
//   'Jicama',
//   'Kale',
//   'Kiwifruit',
//   'Kohlrabi',
//   'Kumquat',
//   'Leeks',
//   'Lemons',
//   'Lettuce',
//   'Lima Beans',
//   'Limes',
//   'Longan',
//   'Loquat',
//   'Lychee',
//   'Madarins',
//   'Malanga',
//   'Mandarin Oranges',
//   'Mangos',
//   'Mulberries',
//   'Mushrooms',
//   'Napa',
//   'Nectarines',
//   'Okra',
//   'Onion',
//   'Oranges',
//   'Papayas',
//   'Parsnip',
//   'Passion Fruit',
//   'Peaches',
//   'Pears',
//   'Peas',
//   'Peppers',
//   'Persimmons',
//   'Pineapple',
//   'Plantains',
//   'Plums',
//   'Pomegranate',
//   'Potatoes',
//   'Prickly Pear',
//   'Prunes',
//   'Pummelo',
//   'Pumpkin',
//   'Quince',
//   'Radicchio',
//   'Radishes',
//   'Raisins',
//   'Raspberries',
//   'Red Cabbage',
//   'Rhubarb',
//   'Romaine Lettuce',
//   'Rutabaga',
//   'Shallots',
//   'Snow Peas',
//   'Spinach',
//   'Sprouts',
//   'Squash',
//   'Strawberries',
//   'String Beans',
//   'Sweet Potato',
//   'Tangelo',
//   'Tangerines',
//   'Tomatillo',
//   'Tomato',
//   'Turnip',
//   'Ugli Fruit',
//   'Water Chestnuts',
//   'Watercress',
//   'Watermelon',
//   'Waxed Beans',
//   'Yams',
//   'Yellow Squash',
//   'Yuca/Cassava',
//   'Zucchini Squash',
// ];

var rootElementOnHTML = document.getElementById('root');

/* Fruity array
var fruity = [{
  "genus": "Malus",
  "name": "Apple",
  "id": 6,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutritions": {
      "carbohydrates": 11.4,
      "protein": 0.3,
      "fat": 0.4,
      "calories": 52,
      "sugar": 10.3
  }
}, {
  "genus": "Prunus",
  "name": "Apricot",
  "id": 35,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutritions": {
      "carbohydrates": 3.9,
      "protein": 0.5,
      "fat": 0.1,
      "calories": 15,
      "sugar": 3.2
  }
}, {
  "genus": "Musa",
  "name": "Banana",
  "id": 1,
  "family": "Musaceae",
  "order": "Zingiberales",
  "nutritions": {
      "carbohydrates": 22,
      "protein": 1,
      "fat": 0.2,
      "calories": 96,
      "sugar": 17.2
  }
}, {
  "genus": "Fragaria",
  "name": "Blueberry",
  "id": 33,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutritions": {
      "carbohydrates": 5.5,
      "protein": 0,
      "fat": 0.4,
      "calories": 29,
      "sugar": 5.4
  }
}, {
  "genus": "Prunus",
  "name": "Cherry",
  "id": 9,
  "family": "Rosaceae",
  "order": "None",
  "nutritions": {
      "carbohydrates": 12,
      "protein": 1,
      "fat": 0.3,
      "calories": 50,
      "sugar": 8
  }
}, {
  "genus": "Psidium",
  "name": "Guava",
  "id": 37,
  "family": "Myrtaceae",
  "order": "Myrtales",
  "nutritions": {
      "carbohydrates": 14,
      "protein": 2.6,
      "fat": 1,
      "calories": 68,
      "sugar": 9
  }
}, {
  "genus": "Citrus",
  "name": "Lemon",
  "id": 26,
  "family": "Rutaceae",
  "order": "Sapindales",
  "nutritions": {
      "carbohydrates": 9,
      "protein": 1.1,
      "fat": 0.3,
      "calories": 29,
      "sugar": 2.5
  }
}, {
  "genus": "Mangifera",
  "name": "Mango",
  "id": 27,
  "family": "Anacardiaceae",
  "order": "Sapindales",
  "nutritions": {
      "carbohydrates": 15,
      "protein": 0.82,
      "fat": 0.38,
      "calories": 60,
      "sugar": 13.7
  }
}, {
  "genus": "Citrus",
  "name": "Orange",
  "id": 2,
  "family": "Rutaceae",
  "order": "Sapindales",
  "nutritions": {
      "carbohydrates": 8.3,
      "protein": 1,
      "fat": 0.2,
      "calories": 43,
      "sugar": 8.2
  }
}, {
  "genus": "Pyrus",
  "name": "Pear",
  "id": 4,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutritions": {
      "carbohydrates": 15,
      "protein": 0.4,
      "fat": 0.1,
      "calories": 57,
      "sugar": 10
  }
}, {
  "genus": "Ananas",
  "name": "Pineapple",
  "id": 10,
  "family": "Bromeliaceae",
  "order": "Poales",
  "nutritions": {
      "carbohydrates": 13.12,
      "protein": 0.54,
      "fat": 0.12,
      "calories": 50,
      "sugar": 9.85
  }
}, {
  "genus": "Rubus",
  "name": "Raspberry",
  "id": 23,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutritions": {
      "carbohydrates": 12,
      "protein": 1.2,
      "fat": 0.7,
      "calories": 53,
      "sugar": 4.4
  }
}, {
  "genus": "Fragaria",
  "name": "Strawberry",
  "id": 3,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutritions": {
      "carbohydrates": 5.5,
      "protein": 0.8,
      "fat": 0.4,
      "calories": 29,
      "sugar": 5.4
  }
}, {
  "genus": "Solanum",
  "name": "Tomato",
  "id": 5,
  "family": "Solanaceae",
  "order": "Solanales",
  "nutritions": {
      "carbohydrates": 3.9,
      "protein": 0.9,
      "fat": 0.2,
      "calories": 74,
      "sugar": 2.6
  }
}, {
  "genus": "Citrullus",
  "name": "Watermelon",
  "id": 25,
  "family": "Cucurbitaceae",
  "order": "Cucurbitales",
  "nutritions": {
      "carbohydrates": 8,
      "protein": 0.6,
      "fat": 0.2,
      "calories": 30,
      "sugar": 6
  }
}];
*/

// DOM MANIPULATION 🎨
var h1 = document.createElement('h1');
h1.textContent = 'Fruits for Life ';
rootElementOnHTML.appendChild(h1);

var h2 = document.createElement('h2');
h2.textContent = 'These are fruits 🍇 🍒';
rootElementOnHTML.appendChild(h2);

var p = document.createElement('p');
p.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ipsa. Iure, soluta amet facere adipisci fugit voluptatum architecto a corporis! Eum fugiat aut deserunt voluptatibus eius, repellendus culpa vero esse, optio quod hic omnis consectetur, quia molestias saepe sed quibusdam amet! Est, incidunt et aliquam optio adipisci obcaecati quidem id.';
rootElementOnHTML.appendChild(p);

var img = document.createElement('img');
img.src = 'https://picsum.photos/200';
rootElementOnHTML.appendChild(img);

var ol = document.createElement('ol');
rootElementOnHTML.appendChild(ol);

for (var i = 0; i < fruits.length; i++) {
  var li = document.createElement('li');
  li.textContent = fruits[i];
  ol.appendChild(li);
}

var otherOl = document.createElement('ol');
rootElementOnHTML.appendChild(otherOl);

for (var i = 0; i < fruity.length; i++) {
  var li = document.createElement('li');
  li.textContent = 'Family: ' + fruity[i].family + ' - Name: ' + fruity[i].name;
  otherOl.appendChild(li);
}

/* EVENT LISTENERS 🦻
var myButton = document.createElement('button');
myButton.textContent = 'Add Fruit';
rootElementOnHTML.appendChild(myButton);

myButton.addEventListener('click', function() {
  var div = document.createElement('div');

  var randomIndex = Math.floor(Math.random() * fruits.length);
  div.textContent = fruits[randomIndex];
  rootElementOnHTML.appendChild(div);
});
*/

/* SET INTERVAL ⏱
var myIntervalID;
var counter = 0;

function startInterval() {
  myIntervalID = setInterval(function() {
    if(counter < 40){
      counter+= 10;
      console.log(counter);
    } else {
      stopInterval();
    }
   
  }, 1000)
}

function stopInterval() {
  clearInterval(myIntervalID);
  console.log('done, I have stopped the interval');
}

startInterval();
*/

/* LOCAL STORAGE 📦
var helloDiv = document.createElement('div'); // not needed if done html
var button = document.getElementById('update-button');

helloDiv.textContent = 'Hello'; // not needed if done html
helloDiv.classList.add('hello-message'); // not needed if done html
rootElementOnHTML.appendChild(helloDiv); // not needed if done html

function showStoredName() {
  var name = localStorage.getItem('name');

  if (name === null) {
    return;
  }

  helloDiv.textContent = 'Hello ' + name;
}

showStoredName();

button.addEventListener('click', function (event) {
  event.preventDefault();

  var name = document.getElementById('name-in-form').value;

  localStorage.setItem('name', name);

  showStoredName();
});
*/

/*
DOM MANIPULATION
[x] - Get a reference point to add content to our HTML page
[x] - Create HTML elements
  - h1 
  - h2
  - p
[x] - Add content to each element
[x] - Attach the element to the page
[x] - Create an image HTML element and add it to the page
[x] - Create an Array that will contain data to populate an HTML list - or use fruits array provided
[x] - Loop over the created array add each item to the page
[x] - If there is time, use an object instead of an array, and create cards in the page use https://www.fruityvice.com/#1
*/

/*
EVENT LISTENERS
[x] - Syntax - MDN https://developer.mozilla.org/en-US/docs/Web/API/EventListener
[x] - Add a button to the page trigger an action - One option is to get an element from the array or object and display it on the page
*/

/*
SET INTERVAL
[x] - Syntax - MDN https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
[x] - Add an interval with a countdown as in MDN, or add items from the fruits array to the page
*/

/*
LOCAL STORAGE
[] - Syntax - MDN https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[] - Add content to the page to greet a user
[] - Add a form to the page to capture the user's name
[] - Use local storage to save the user's name and retrieve it when the page loads
*/
