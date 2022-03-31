import './App.css';
import React, { useState } from 'react';
import Die from './components/die';
import Button from 'react-bootstrap/Button';
import {nanoid} from 'nanoid';

export default function App() {

/**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
 */

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

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : //take props of original die, but !die.isHeld
        die
    }))

  }
  
  const diceElements = dice.map(die => (
     //die.id is created by nanoID 
      <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)) 
                                                             // holdDice function passed down to each
                                              //* instance of the Die component so when each one is clicked, 
                                                // it logs its own unique ID property
     

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


