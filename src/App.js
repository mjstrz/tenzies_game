import './App.css';
import React from 'react';

import Dice from './components/dice';

export default function App() {

  function allNewDice() {

    const newDice = [] //new array to hold the numbers
    for (let i = 0; i < 10; i++) { // loop 10 times
        newDice.push(Math.ceil(Math.random() * 6)) // push a random number from 1-6 to the array
      }
      return newDice // return array 
  }  
    console.log(allNewDice());
  

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


