import { useState } from "react"



export default function Player({initialName, symbol}){
    const [name, setPlayerName] = useState(initialName)
    const [isEditing, SetisEditing] = useState(false);
    let name_tab = ''

    function handleChange(event){
        setPlayerName(event.target.value)
    }

    if(!isEditing)
        {name_tab=   <span className="player-name">{name}</span>}
    else
        { name_tab = <input type="text" required defaultValue={name} onChange={handleChange}/>}

    return(
        <li>
        <span>
          {name_tab}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={()=>{SetisEditing(editing=>!editing)}}>{isEditing?"Save":"Edit"}</button>
      </li>
    )
}