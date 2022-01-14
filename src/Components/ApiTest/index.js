import React from "react";
import { useState, useEffect } from "react";

// function PokemonViewer({ randomNumber }) {
//   // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
//   // HINT: you will need useState and useEffect!

//   const [pokemon, setPokemon] = useState([]);
//   // const [pokemonName, setPokemonName] = useState(0);

//   async function getPokemon(id) {
//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

//     let data = await response.json();
//     setPokemon([data.forms[0].name, data.sprites.front_default]);
//     // setPokemonName(data.forms[0].name);
//     console.log(data);
//   }

//   useEffect(() => {
//     getPokemon(randomNumber);
//   }, [randomNumber]);

//   return (
//     <div className="pokemon-viewer">
//       <p>display pokemon with id {randomNumber} here!</p>
//       <p>Name is {pokemon[0]}</p>
//       <img src={pokemon[1]} alt="Pokemon"></img>
//     </div>
//   );

function ApiTest({ location }) {
  const [data, setData] = useState({});

  async function fetchData(location) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=S2J5XERMPPNGC2NRCCYC5J3CH&contentType=json`
    );
    const data = await response.json();
    setData([
      data.description,
      data.days[0].temp,
      data.days[0].datetime,
      data.resolvedAddress,
    ]);
  }

  useEffect(() => {
    fetchData(location);
  }, []);

  return (
    <div>
      <h2>NO</h2>
      <p>{data[0]}</p>
      <p>{data[1]}°C</p>
      <p>{data[2]}</p>
      <p>{data[3]}</p>
    </div>
  );
}

export default ApiTest;
