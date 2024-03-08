'use client'

import React, { useState } from 'react'

export default function Home () {
    let [counter , setCounter] = useState(0)
    let increment =()=> {
        setCounter(counter+1)
    }
    let decrement =()=> {
        setCounter(counter-1)
    }
    let reset =()=>{
        setCounter(0)
    }
  return (
    <div>
        <h2>Counter</h2>
        <p>counte is {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Decrement</button>
    </div>
  )
}
