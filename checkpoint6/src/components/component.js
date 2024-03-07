import React from 'react';
import { useState } from 'react';
import './../styles/styles.css'   // ./ is back a directory, . is for same directory, ./ is to get into folder.



export function Post(props) {
  return (
    <div class="post">
      This post is going to be about {props.animal}.
    </div>
  );
}


export function Comment(props) {

  const [integer, setInteger] = useState(props.number);

  let someJSX = null;

  if(integer > 10) {
    someJSX = <div>Hey, this must really be my lucky day! {integer} is soooo many {props.animal}!</div>
  }

  return (
    <div class="comment">
      <h3>{props.user}</h3>
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