import { useLocalStorage } from './useLocalStorage.js';


export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage(value);

    if (darkMode){
        document.body.classList.add('dark-mode');
    }
    else{
        document.body.classList.remove('dark-mode');
    }
    
return [darkMode, setDarkMode];
};
