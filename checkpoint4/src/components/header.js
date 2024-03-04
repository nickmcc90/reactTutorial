import React from 'react';
import '../style/header.css';
import ImagePath from '../img/pikachu-field.jpg';

export function Header(props) {
      // Return some JSX here...
      const strength = props.strength;
      const health = props.hp;
      const pikachu = props.src
      return (
        <div id="header">
          <div id="container">
            <div id="name">
              <h1>
                {/* TODO: Add the name attribute from props here */}
                {strength}
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
        </div>
      );
}