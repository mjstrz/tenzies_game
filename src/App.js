import './App.css';
import React, { useState } from 'react';
import Dice from './components/dice';

export default function App() {


  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {

    const newDice = [] //new array to hold the numbers
    for (let i = 0; i < 10; i++) { // loop 10 times
        newDice.push(Math.ceil(Math.random() * 6)) // push a random number from 1-6 to the array
      }
      return newDice // return array 
  }  
    console.log(allNewDice());
  
  const diceElements = dice.map(die => <Dice value={dice} />)

  return (
    <main>
        <div className='dice-container'>
            {diceElements}
        </div> 
    </main>
  );
}


