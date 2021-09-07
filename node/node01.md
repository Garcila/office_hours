# NODE

## Topics we'll review

### ES6

- let and const vs var
  - scope (global, scoped to the block)
  - re-declaring and updating
    - var - yes
    - let updated but not re-declared
    - const not updated or re-declared (gotcha)
  - hoisting 
    - var to top of scope and initialized with undefined
    - let to top and not initialized

- arrow functions
  - syntax

- functional loops
  - foreach
  - map
  - filter
  - reduce???
- destructuring

### NODE

- What is Node
  - Wikipedia. ...open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- Why do we use Node
  - Wikipedia. ...represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.
- Where is my Window
  - There is no window
- Modules
  - '...simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application.'
- Explain require
  - Way to access modules (kind of like JS libraries).  Modules are functions.
  - Syntax var something = require('what you want to require')
- What is process in Node?
  - '...global object that can be accessed inside any module without requiring it.'
  - process.argv - why is this useful?
  - process.argv[0] and [1] and [2]
- fs.  Where does it come from and how to use it
  - writeFile
  - readFile
  - appendFile
  - fs.mkdir
  - Error first callback. 'just a convention to emphasize the importance of error handling'
- What is NPM 'software registry'
  - npm init
  - package.json
  - NPM Install - chalk

  
### INQUIRER

