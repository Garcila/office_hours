const root = document.getElementById( 'root' );

const allFruits = fetch( '/api/allFruits' )
  .then( response => response.json() )
  .then( data => populatePage( data ) );

function populatePage ( data ) {
  data.forEach( fruit => {
    const div = document.createElement( 'div' );

    const content = `
     <img src="${fruit.image}" alt="${fruit.name}" />
     <h3>${fruit.name}</h3>
     <h4>${fruit.nombre}</h4>
      `;

    div.innerHTML = content;

    root.appendChild( div );
  } )
}
