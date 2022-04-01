import './App.css';
import React, { useState, useEffect } from 'react';
import Die from './components/die';
import Button from 'react-bootstrap/Button';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {

  const [dice, setDice] = useState(allNewDice())


  const [tenzies, setTenzies] = useState(false)

  //managing side effect
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld) // if every die has "true" for ifHeld prop, will return true
    const firstValue = dice[0].value 
    const allSameValue = dice.every(die => die.value === firstValue)

    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
    console.log("dice state changed")
  }, [dice])
  //will run everytime the dice changes

  /**
 * Challenge: Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 * 
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6), // Update the array of numbers in state to be
      isHeld: false,                      // an array of objects instead.
      id: nanoid() // nanoid - a fast way to generate a random ID 
    }
  }

  function allNewDice() {
    const newDice = [] //new array to hold the numbers
    for (let i = 0; i < 10; i++) { // loop 10 times
        newDice.push(generateNewDie()) 
      }
      return newDice // return array 
  }  
    console.log(allNewDice());


  // ONLY rolls dice that are NOT being held 
    function rollDice() {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? // if die is being held,
            die : // Keep it. If not, 
            generateNewDie()  // call function 
      }))
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
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
            {diceElements}
        </div> 
        <Button 
          className="roll-dice" 
          onClick={rollDice}
          >
            {tenzies ? "New Game" : "Roll"}</Button>
        {/*  * Clicking the button should generate a new array of numbers
              * and set the `dice` state to that new array (thus re-rendering
              * the array to the page) */}
    </main>
  );
}


