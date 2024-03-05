import { useState } from 'react'
import Emojies from './Components/Emojies'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Emojies/>
    </>
  )
}

export default App
