import './../styles/styles.css'   // ./ is back a directory, . is for same directory, ./ is to get into folder.
import { useState, useEffect } from "react"



export function Post(props) {
  return (
    <div class="post">
      This post is going to be about {props.animal}.
    </div>
  );
}


export function Comment(props) {

  const [pokemon, setPokemon] = useState()

  const handleFetch = (response) => {
    console.log(response.status);
    return response.json();
  }

  const handleResponse = (response) => {
    const pokeUrls = response.results.map((item) => {item.url} );

    const responses = pokeUrls.forEach((newUrl) => {
      getPokemonData(newUrl);
    })

    const respPoke = responses.map((element) => {element.ability})
     
    setPokemon(respPoke);
  }

  const handleError = (error) => {
    console.log(error);
    setPokemon(<li>Network Error!</li>)
  }

  function getPokemonData(url) {
    fetch(url)
    .then(handleFetch)
  }

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
    fetch(url)
    .then(handleFetch)
    .then(handleResponse)
    .catch(handleError)
  }, [])



  const integer = props.number;
  let someJSX = null;
  if(integer > 10) {
    someJSX = <div>Hey, this must really be my lucky day! {integer} is soooo many {props.animal}!</div>
  }

  return (
    <div class="comment">
      <h3>{ pokemon }</h3>
      {someJSX ? someJSX : <div>My place looks as big as {integer}!</div>}
    </div>
  );
}

export function Avatar(props) {


  const Avatar = <img className="avatar" src={props.image} alt={props.alt} />

  return (
    <>
        {Avatar}
    </>
  );
}


// import './../styles/styles.css'   // ./ is back a directory, . is for same directory, ./ is to get into folder.
// import { useState, useEffect } from "react"



// export function Post(props) {
//   return (
//     <div class="post">
//       This post is going to be about {props.animal}.
//     </div>
//   );
// }


// export function Comment(props) {

//   const [pokemon, setPokemon] = useState()

//   const handleFetch = (response) => {
//     console.log(response.status);
//     return response.json();
//   }

//   const handleResponse = (response) => {
//     const respPoke = response.results.map((item) =>
//     <>
//       <h3> { item.name } </h3>
//       <p> { item.url } </p>
//     </>
    
//     );
     
//     setPokemon(respPoke);
//   }

//   const handleError = (error) => {
//     console.log(error);
//     setPokemon(<li>Network Error!</li>)
//   }

//   function getPokemonData(url) {
//     fetch(url)
//     .then(handleFetch)
//   }

//   useEffect(() => {
//     const url = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
//     fetch(url)
//     .then(handleFetch)
//     .then(handleResponse)
//     .catch(handleError)
//   }, [])



//   const integer = props.number;
//   let someJSX = null;
//   if(integer > 10) {
//     someJSX = <div>Hey, this must really be my lucky day! {integer} is soooo many {props.animal}!</div>
//   }

//   return (
//     <div class="comment">
//       <h3>{ pokemon }</h3>
//       {someJSX ? someJSX : <div>My place looks as big as {integer}!</div>}
//     </div>
//   );
// }

// export function Avatar(props) {


//   const Avatar = <img className="avatar" src={props.image} alt={props.alt} />

//   return (
//     <>
//         {Avatar}
//     </>
//   );
// }