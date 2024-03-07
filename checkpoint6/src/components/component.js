import React from 'react';
import { useState } from 'react';


export function Post(props) {
  return (
    <div class="post">
      This post is going to be about {props.animal}.
    </div>
  );
}

export function Comment(props) {
  const [integer, setInteger] = useState(props.number);

  let someJSX;

  if(integer > 10) {
    someJSX = <div>Hey, this must really be my lucky day! {integer} is soooo many {props.animal}!</div>
  }

  return (
    <div class="comment">
      {someJSX ? someJSX : <div>My place looks as big as {integer}!</div>}
    </div>
  );
}

export function Avatar() {

}