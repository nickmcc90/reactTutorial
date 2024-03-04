import React from 'react';
import '../style/header.css';
import ImagePath from '../img/pikachu-field.jpg';

export function Header(props) {
      // Return some JSX here...
      const name = props.name;
      const health = props.hp;
      return (
        <div id="header">
          <div id="container">
            <div id="name">
              <h1>
                {/* TODO: Add the name attribute from props here */}
                {name}
              </h1>
            </div>
            <div id="hp">
              <h1>
                {/* TODO: Add the hp attribute from props here */}
                {health}
              </h1>
            </div>
          </div>
          {/* TODO: Add the pikachu image here using ImagePath. Don't forget to set an alt! */}
          <img src={ImagePath} alt="A pikachu picture"></img>
        </div>
      );
}