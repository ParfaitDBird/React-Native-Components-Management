import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../Hooks/useAnimation';
import { ThemeContext } from '../Context/themeContext/ThemeContext';
export const Animation101Screen = () => {
    
    const {theme:{button}} = useContext(ThemeContext)
    const {opacity,fadeIn,fadeOut,startMovingPosition,position} = useAnimation();
  return (
  <View style={styles.container}>
      <Animated.View style={{
          ...styles.Box,
             backgroundColor:button,
             marginBottom:20,
             opacity,
             transform:[{
                 translateY: position,
             }]
          }}/>
       <View style={styles.buttoncontainer}>
       <Button
            title="fade in"
            onPress={() =>{
                fadeIn();
                startMovingPosition(0)
            } 
            } 
            color={button}
       />
       <View style={styles.spacer}/>
              <Button
            title="fade out"
            onPress={() =>{
                fadeOut();
                startMovingPosition(-100)
            } 
            } 
            color={button}
       />
       </View>

  </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    Box:{
        //backgroundColor:'#5856D6',
        width: 150,
        height:150
    },
    buttoncontainer:{
        alignContent:'center',
        flexDirection:'row',
        
    },
    spacer:{
        margin:15
    }
});