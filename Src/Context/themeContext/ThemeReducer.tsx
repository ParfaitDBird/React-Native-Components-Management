import { Theme } from "@react-navigation/native"

type themeAction = 
| { type: 'set_light_Theme'}
| { type: 'set_dark_Theme'}
| { type: 'set_custom_Theme'}


export interface ThemeState extends Theme{
    currentTheme: 'light' | 'dark' | 'custom',
    dividerColor: string,
    icon: string,
    button: string,
    switchoff: string,
    switchon: string,
    modal: string,
    dotcolor: string,
}

export const lightTheme:ThemeState = {
    currentTheme:'light',
    dark:false,
    dividerColor:'rgba(0,0,0,0.7)',
    icon:'#707070',
    button:'#00C4F5',
    switchoff:'#707070',
    switchon:'#00C4F5',
    modal:'rgba(128, 238, 239, 0.6)',
    dotcolor:'black',
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'rgba(192, 192, 192,0.6)',
        notification: 'teal',
    },
}
export const darkTheme:ThemeState = {
    currentTheme:'dark',
    dark:true,
    dividerColor:'#FFFFFF',
    icon:'#F363A6',
    button:'#707070',
    switchoff:'#707070',
    switchon:'#F363A6',
    modal:'rgba(83, 42, 42, 1)',
    dotcolor:'white',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'green',
        text: 'pink',
        border: 'rgba(255, 192, 203,0.6)',
        notification: 'teal',
    },
}
export const customTheme:ThemeState = {
    currentTheme:'custom',
    dark:false,
    dividerColor:'rgba(255,255,255,0.7)',
    icon:'#01FD88',
    button:'#5C87FF',
    switchoff:'#5C87FF',
    switchon:'#01FD88',
    modal:'rgba(114, 114, 114, 0.6)',
    dotcolor:'white',
    colors: {
        primary: '#FEBC87',
        background: '#FEBC87',
        card: '#FEBC87',
        text: 'white',
        border: 'rgba(1, 253, 136, 0.6)',
        notification: 'teal',
    },
}


export const themeReducer = (state: ThemeState, action:themeAction):ThemeState =>{

    switch (action.type) {
        case 'set_light_Theme':
            return{
                ...lightTheme
            }
        case 'set_dark_Theme':
            return{
                ...darkTheme
            }
        case 'set_custom_Theme':
                return{
                ...customTheme
                }
        default:
            return state;
    }

}