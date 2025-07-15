import { useState } from 'react'
import Ticket from './Ticket'
import './App.css'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import { sum } from './helper'

function App() {

  let winCondition = (ticket)=>{
    return sum(ticket) === 15
  }
  const [count, setCount] = useState(0)

  return (
    <>
    <Lottery n={5} winCondition={winCondition} />
    
      
    </>
  )
}

export default App
