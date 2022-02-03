import 'react-native-gesture-handler';
import React from 'react';
import { Navigator } from './Src/Navigator/Navigator';
import { LogBox } from 'react-native';
import { ThemeProvider } from './Src/Context/themeContext/ThemeContext';


const App = () => {
  return (
    <AppState>
        <Navigator/>
    </AppState>

  )
}

const AppState = ({children}: any) => {
  return(
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

LogBox.ignoreLogs
([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
export default App;
