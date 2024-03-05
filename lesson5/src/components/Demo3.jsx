import React, { useState, useEffect } from 'react';

export default function Demo3() {
    const [pokemon, setPokemon] = useState()

    // Use async so your page can continue loading
    const getAPIData = async () => {        // this arrow function can be run in the background with async
        // This code is provided, it can be complicated
        const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        // This should seem familiar
        const responsePokemon = responseJSON.results.map((item) => <li>{item.name}: Find more at {item.url}</li>);

        // This should also seem familiar
        setPokemon(responsePokemon)
    }

    useEffect(() => {
        getAPIData()        // we only want to run this function once, so we don't put any dependencies at the end.
    }, [])  

    const someJSX = <ul>{pokemon}</ul>;

    // Return some JSX here...
    return someJSX;
}

// Here, we are getting a url from each pokemon that we probably need to reference to get more info
// about the pokemon. Now, whether this URL is already a JSON object I don't know, because that would
// tell us whether we have to convert it into a json (we probably do).

