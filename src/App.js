
import React, { useState } from 'react'
import './index.css';

const App = () => {
  const[dicenumber ,setDicenumber] = useState(1)


  const refreshdice =() => {
    
    const randomnumber = Math.floor(Math.random() * 6) + 1
    setDicenumber(randomnumber)
  }


  return (
    <div>
      <center>
      <img  width={300} height={300} src={require(`./assets/${dicenumber}.png`)} alt="dice"></img><br/>
      <button onClick={()=> refreshdice() } className='button'>roll</button>
    </center>
    </div>
  )
}

export default App
