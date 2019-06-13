import React from 'react';
import './App.css';
import logo from './logo.png'
import UserInput from './components/UserInput'
import DisplayResults from './components/DisplayResults';

function App() {
  return (
    <div className="container">
      <img src={logo} alt='logo' style={{ width: 200, display: 'block', margin: 'auto' }}  />
      <h1 className='text-center display-4 text-primary'>Email H@cker</h1>
      <hr />
      <UserInput />
      <hr />
      <hr />
      <DisplayResults />
      <hr />

    </div>
  );
}

export default App;
