import React, { useContext } from 'react';
import { Alert, Button, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../Components/HeaderTitle';
import { styles } from '../Theme/appTheme';
import { ThemeContext } from '../Context/themeContext/ThemeContext';
export const AlertScreen = () => {
  const {theme:{button}} = useContext(ThemeContext);
    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Este es el mensaje de alerta",
            [
              {
                text: "Cancel",
                //onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK"}
            ]
            ,{
                cancelable: true,
               // onDismiss:() => console.log("OnDismiss")
            }
          );
    }

    const showPrompt=() =>{
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel'},
             {text: 'OK'},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

  return (
      <View style={styles.globalmargin}>
          <HeaderTitle title="Alerts"/>
          <Button
            title="Mostrar alerta"
            onPress={showAlert}
            color={button}
          />
          <View style={{margin:5}}/>
          <Button
            title="Mostrar Prompt"
            onPress={showPrompt}
            color={button}
          />
      </View>
  )
};
