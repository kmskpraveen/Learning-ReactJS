import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is cildren props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      <Greet name="Diana" heroName="Woner woman"/>
      <Welcome name="Bruce" heroName="Batman"/>
      {/* <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Woner woman"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
