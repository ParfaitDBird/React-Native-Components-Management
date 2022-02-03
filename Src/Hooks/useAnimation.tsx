import React, { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = () =>{
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();


    }
    const fadeOut = () =>{
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration:700,
                useNativeDriver:true,


            }
        ).start()
        // Animated.timing(
        //     position,
        //     {
        //         toValue:-100,
        //         duration:700,
        //         useNativeDriver:true,
        //     }
        // ).start();
    }

    const startMovingPosition = (initPosition: number, duration: number = 700) => {
        //initPosition==0 is a fade in
        if (initPosition==0) {
            position.setValue(-100)
            Animated.timing(
                position,
                {
                    toValue:initPosition,
                    duration,
                    useNativeDriver:true,
                   easing:Easing.bounce
                }
            ).start();
        //else it will be a fade out
        }else{
            Animated.timing(
                position,
                {
                    toValue:initPosition,
                    duration,
                    useNativeDriver:true,
                    
                }
            ).start();
        }

    }
    return{
    
      fadeIn,
      fadeOut,
      startMovingPosition,
      opacity,
      position
    }
    

};

