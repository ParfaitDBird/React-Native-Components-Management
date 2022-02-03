import React,{ createContext, useReducer,useEffect } from "react"
import { useColorScheme } from "react-native";
import { themeReducer, ThemeState, lightTheme, darkTheme } from './ThemeReducer';

interface ThemeContextProps{
    theme: ThemeState,
    setDarkTheme: () => void;
    setLightTheme: () => void;
    setCustomTheme:() => void,
}

export const ThemeContext = createContext({} as ThemeContextProps);



export const ThemeProvider = ({children}: any) =>{

    const colorScheme = useColorScheme();
    const [theme, dispatch] = useReducer(themeReducer, (colorScheme==='dark') ? darkTheme : lightTheme  );
    useEffect(() => {
      (colorScheme==='light')
        ? setLightTheme()
        : setDarkTheme()
    }, [colorScheme]);
    
    const setDarkTheme = () =>{
        dispatch({type:'set_dark_Theme'})
       // console.log("Set dark theme")
    }
    const setLightTheme = () =>{
        dispatch({type:'set_light_Theme'})
       // console.log("Set light theme")
    }
    const setCustomTheme = () =>{
        dispatch({type:'set_custom_Theme'})
       // console.log('set custom theme')
    }

    return(
        <ThemeContext.Provider value={{
            theme,     
            setDarkTheme,
            setLightTheme,
            setCustomTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}