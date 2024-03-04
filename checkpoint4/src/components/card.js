import React from 'react';
import { Header } from './header';
import { Info } from './info';
import '../style/card.css';

export function Card(props) {
  return (
    <div id="card">
      {/* TODOs: 
      Checkpoint 1 - Add the header and info elements under this comment. 
      Checkpoint 2 - Use (new Date()).toISOString() as the timestamp attribute of info*/}
      <Header name="Pikachu" hp="100 HP"/>
      <Info timestamp={(new Date()).toISOString()}/>
    </div>
  );
}