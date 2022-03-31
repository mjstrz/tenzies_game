import './App.css';
import React, { useState } from 'react';
import Die from './components/die';
import Button from 'react-bootstrap/Button';
import {nanoid} from 'nanoid';

export default function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = [] //new array to hold the numbers
    for (let i = 0; i < 10; i++) { // loop 10 times
        newDice.push({
          value: Math.ceil(Math.random() * 6), // Update the array of numbers in state to be
          isHeld: false,                      // an array of objects instead.
          id: nanoid() // nanoid - a fast way to generate a random ID 
        }) 
      }
      return newDice // return array 
  }  
    console.log(allNewDice());

  // Re-roll all 10 dice 
    function rollDice() {
      setDice(allNewDice())
  }
  
  const diceElements = dice.map(die => (
      <Die key={die.id} value={die.value} />)) //die.id is created by nanoID 

  return (
    <main>
        <div className='dice-container'>
            {diceElements}
        </div> 
        <Button className="roll-dice" onClick={rollDice}>Roll</Button>
        {/*  * Clicking the button should generate a new array of numbers
              * and set the `dice` state to that new array (thus re-rendering
              * the array to the page) */}
    </main>
  );
}


