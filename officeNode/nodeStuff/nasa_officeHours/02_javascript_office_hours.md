# JavaScript

## On our previous Episode 📺

### Fundamentals

- Variables
- Conditionals
- Random
- Arrays
- For Loops
- Functions

## New This Week

- DOM Manipulation

- Event Listeners

- Timers

- Local Storage

- Algorithms - maybe

---

### DOM MANIPULATION 🎨

- [ ] More info - [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [ ] - Create a new folder and add the following files
  - [ ] - index.HTML
  - [ ] - script.js
- [ ] - Get a reference points - variables storing html elements
- [ ] - Create HTML elements

  - h1
  - h2
  - p
  - [ ] - Add content to each element
  - [ ] - Attach the element to the page
- [ ] - Create an image HTML element and add it to the page [LoremPicsum](https://picsum.photos/200)
- [ ] - Create an Array that will contain data to populate an HTML list
  - [ ] - Create a list (order or unordered)
  - [ ] - Loop over the created array add each item to the list
  - [ ] - Loop over the fruits array provided to populate the list
  - [ ] - ⏳ use an object instead of an array, use [FruitVice](https://www.fruityvice.com/#1)

---

### EVENT LISTENERS 🦻

- [ ] - Syntax - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventListener)
- [ ] - Create a new folder and add the following files
  - [ ] - index.HTML
  - [ ] - script.js
- [ ] - Get a reference points - variables storing html elements
- [ ] - Create a new array or use the fruits provided
- [ ] - Add a button to the page trigger an action
  - [ ] - Get an element from the array or object and display it on the page

---

### TIMER - setInterval/setTimeout ⏱

- [ ] - Syntax - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- [ ] - Create, run and clear an interval in the Console
- [ ] - Create a new folder and add the following files
  - [ ] - index.HTML
  - [ ] - script.js
- [ ] - Add an interval with a countdown as in the example from MDN
  - [ ] - Set the required variables
  - [ ] - Create a function to start the interval
  - [ ] - Create a function to stop the interval

---

### LOCAL STORAGE 📦

- [ ] - Syntax - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [ ] - Create a new folder and add the following files
  - [ ] - index.HTML
  - [ ] - script.js
- [ ] - Setup a form to get user name.  We'll use the following:

    ```js
    <form method="POST">
      <label for="name">Name</label>
      <input type="text" name="name" id="name-in-form" placeholder="enter name" />
      <button id="update-button">Update</button>
    </form>
    ```

- [ ] - Add a place in the html to add some text below the form

  ```html
  <div class='hello-div'>Hello you</div>
  ```

- [ ] - Get a reference points - variables storing html elements
- [ ] - Use local storage to save the user's name and retrieve it when the page loads
  - [ ] - Create a function showStoredName
    - [ ] - Check if there is a name in local storage
    - [ ] - Check if the name is null or undefined and return if it is
    - [ ] - Otherwise add the name to the created div ('hello-div')
  - [ ] - Create an event listener that will be triggered by the 'Update' button
    - [ ] - Prevent default action from the form
    - [ ] - Get name value from the form
    - [ ] - setItem 'name' in local Storage
    - [ ] - Run the function show StoreName()
