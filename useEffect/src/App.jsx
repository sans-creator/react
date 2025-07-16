import { useState } from 'react'

import Counter from './Counter'
import Jokes from './Jokes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Jokes/>
    </>
  )
}

export default App
