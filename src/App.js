import './App.css';
import React, { useState } from 'react';
import Die from './components/die';
import Button from 'react-bootstrap/Button';

export default function App() {

/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = [] //new array to hold the numbers
    for (let i = 0; i < 10; i++) { // loop 10 times
        newDice.push(Math.ceil(Math.random() * 6)) // push a random number from 1-6 to the array
      }
      return newDice // return array 
  }  
    console.log(allNewDice());

  // Re-roll all 10 dice 
    function rollDice() {
      setDice(allNewDice())
  }
  
  const diceElements = dice.map(die => <Die value={dice} />)

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


