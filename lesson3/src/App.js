import logo from './logo.svg';
import './App.css';

import { Component } from './component';

function App() {
  // base jsx
  const basicJSX = <p>Ayo whaddup</p>
  // jsx with nesting
  const nestedJSX = <div><p>Hellow</p><p>Hi.</p></div>
  // multi line JSX
  const multiJSX = (
  <div>
    <p>I just got me a whippit</p>
    <p>hi</p>
  </div>

  );

  // practice JSX elements.
  const helloJSX = (
    <div>
      <ul>
        <li>First thing first I'm the realest</li>
        <li>Second things second I'm the feelest</li>
        <li>Third thing third you a weirdo</li>
      </ul>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='top-text'>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* deploying the JSX */}
        <div>{multiJSX}</div>

        <div>{helloJSX}</div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Component />

      </header>
    </div>
  );
}

export default App;
