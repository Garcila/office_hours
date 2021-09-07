import React, { useState, useEffect } from 'react';
import './App.css';

const stuff = ['👾', '🦄', '🤖', '👽', '🐳', '🐙', '🌈', '🍭'];

function App () {
  const [count, setCount] = useState( 0 );
  // 4444444 
  const [country, setCountry] = useState( null );
  const [flag, setFlag] = useState( null );
  const [loading, setLoading] = useState( true );

  // Step 2 2222222222
  // useEffect( () => {
  //   document.title = `🐡 ${count}`;
  // } );

  // Step 3 33333333  /// Either [] or [count]
  // useEffect( () => {
  //   document.title = `🐡 ${count}`;
  // }, [] ); // Empty array only renders the first time the componenet rendered

  // Step 4 44444
  useEffect( async () => {
    const apiResponse = await fetch( `https://restcountries.eu/rest/v2/all` );
    const countries = await apiResponse.json();
    // console.log( countries )
    const { name, flag } = countries[Math.floor( Math.random() * countries.length )];
    console.log( name, flag )
    setCountry( name );
    setFlag( flag );
    setLoading( false );
  }, [] ) // TEST THIS AS A INFINITE LOOP WITHOUT THE []
  // ADD COUNT TO UPDATE

  return (
    <div>
      <p>Counted { count } times</p>
      <button onClick={ () => setCount( count + 1 ) }>Count</button>
      { loading ? '..... loading countries</h1>' :
        <div>
          <h1>{ country && country }</h1>
          <img src={ flag } alt="country flag" />;
        </div>
      }
    </div>
  )
}

export default App;
