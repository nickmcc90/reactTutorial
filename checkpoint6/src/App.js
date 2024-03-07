import React, { useState } from 'react';
import {  Post, Comment, Avatar } from './components/component';

function App() {
  return (
    <>
      Hello World!
      <Post animal="leopards"/>
      <Comment number={12} animal="leopards"/>
      <Avatar />
    </>
  );
}

export default App;
