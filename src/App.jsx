import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer greeting={'Buenas Buenas'} />
    
    </div>
  )
}

export default App
