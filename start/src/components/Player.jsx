import { useState } from "react"



export default function Player({name, symbol}){
    const [isEditing, SetisEditing] = useState(false);
    let name_tab = ''

    if(!isEditing)
        {name_tab=   <span className="player-name">{name}</span>}
    else
        { name_tab = <input type="text" required value={name}/>}

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