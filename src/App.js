import './App.css';
import React from 'react';

import Dice from './components/dice';

export default function App() {
  return (
    <main>
        <div className='dice-container'>
            <Dice value="1" />
            <Dice value="1"/>
            <Dice value="1"/>
            <Dice value="1"/>
            <Dice value="1"/>
            <Dice value="1"/>
            <Dice value="1"/>
            <Dice value="1"/>
            <Dice value="1"/>
            <Dice value="1"/>
        </div> 
    </main>
  );
}


