import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode';


const HookComponent = () =>{
    const [darkMode, setDarkMode] = useDarkMode(false);
    let seriously;
    if(darkMode){
        seriously = 'True';
    }
    else{
        seriously = 'False';
    }
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };
      console.log('darkmode: ',darkMode);

    return (
        <div>
            <button onClick={toggleMode}>Toggle Dark Mode: {seriously}</button>
        </div>
    )
}

export default HookComponent;