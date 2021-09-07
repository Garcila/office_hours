const root = document.querySelector( '.root' );
const form = document.querySelector( 'form' );

const allFruits = fetch( '/api/allFruits' )
  .then( ( response ) => response.json() )
  .then( ( fruits ) => populatePage( fruits ) );

function populatePage ( fruits ) {
  root.textContent = '';
  fruits.forEach( ( fruit ) => {
    const div = document.createElement( 'div' );
    div.className = 'card';

    const cardContent = `
       <img class='image' src="${fruit.image}" alt="" />
       <h3>EN - ${fruit.name.toUpperCase()}</h3>
       <h4>ES - ${fruit.nombre.toUpperCase()}</h4>
    `;
    div.innerHTML = cardContent;
    root.appendChild( div )
  } );
}

form.addEventListener( 'submit', ( e ) => {
  e.preventDefault();
  const input = document.querySelector( 'input' );

  const wantedFruit = input.value;

  const selectedFruit = fetch( `/api/allFruits/${wantedFruit}` )
    .then( ( response ) => response.json() )
    .then( ( fruit ) => populateFruit( fruit ) );
} );

function populateFruit ( fruit ) {
  root.textContent = '';
  const div = document.createElement( 'div' );
  div.className = 'card';

  const cardContent = `
       <img class='image' src="${fruit.image}" alt="" />
       <h3>EN - ${fruit.name.toUpperCase()}</h3>
       <h4>ES - ${fruit.nombre.toUpperCase()}</h4>
    `;
  div.innerHTML = cardContent;
  root.appendChild( div );
}