import "./character.css"
import React, {useState, useEffect} from "react"

const Character = ({character}) => {

    const [claseActiva, setClase] = useState(false)    

    return (
        <div className="character-card">
            <h2>{character.name}</h2>
            <div className="img-div">
                <img onClick={() => setClase(!claseActiva)} className={claseActiva ? "rotate" : ""} src={character.image} alt={`Imagen de ${character.name}`} />
                <p>Species: {character.species}</p>
            </div>
        </div>
    )
}

export default Character