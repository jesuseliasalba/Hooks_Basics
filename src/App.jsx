
import { useEffect, useState } from 'react'
import './App.css'
import Character from './components/Character/character'

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json();
        
        setCharacters(data.results)
    }

    fetchCharacters();
}, [])


  return (
    <>
      <main>
        <div className='characters'>
        {characters.map((char) => (
          <Character key={char.id} character={char}></Character>
        ))}
        </div>
      </main>
    </>
  )
}

export default App
