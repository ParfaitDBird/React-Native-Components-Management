import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../Components/HeaderTitle';
import { styles } from '../Theme/appTheme';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

    const {setDarkTheme, setLightTheme,setCustomTheme,theme:{colors,button}} = useContext(ThemeContext);
  return (
      <View style={styles.globalmargin}>
          <HeaderTitle title='Theme'/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity 
            onPress={setLightTheme}
            activeOpacity={0.8}
            style={{
                backgroundColor:button,
                width:150,
                height:50,
                justifyContent:'center',
                borderRadius:20,
            }}>
                <Text style={{
                    color:colors.text, 
                    textAlign:'center',
                    fontSize:22
                    }}>Light</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={setDarkTheme}
            activeOpacity={0.8}
            style={{
                backgroundColor:button,
                width:150,
                height:50,
                justifyContent:'center',
                borderRadius:20,
            }}>
                <Text style={{
                    color:colors.text, 
                    textAlign:'center',
                    fontSize:22
                    }}>Dark</Text>
            </TouchableOpacity>
          </View>
          <View style={{ 
                marginVertical: 50, 
                flexDirection:'row',
                justifyContent:'center'
                }}>
          <TouchableOpacity 
            onPress={setCustomTheme}
            activeOpacity={0.8}
            style={{
                backgroundColor:button,
                width:150,
                height:50,
                justifyContent:'center',
                borderRadius:20,
            }}>
                <Text style={{
                    color:colors.text, 
                    textAlign:'center',
                    fontSize:22
                    }}>Custom</Text>
            </TouchableOpacity>
          </View>
      </View>
  )
};
