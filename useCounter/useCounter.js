import { useState } from "react"

export const useCounter = ( initialValue=10 ) => {

  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => {
    setCounter ( (current)=> current + value);
  }

  const decrement = (value = 1) => {
    if (counter === 0) return; // si counter es igual a cero no haga nada
    setCounter ( (current)=> current - value ); // decremententa el valor hasta llegar a cero
                                                  //current es el valor actual que tiene el counter
  }

  const reset = () => {
    setCounter ( initialValue )
  }
  
  return {  // se van importar las funciones requeridas
    counter,
    increment,
    decrement,
    reset
  }
}