import React from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../Hooks/useAnimation';
import { useState } from 'react';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri,style}: Props) => {

    const {opacity,fadeIn}=useAnimation()
    const [isLoading, setIsLoading] = useState(true);
    const finishloading= ()=>{
        setIsLoading(false)
        fadeIn();
    }
  return (
      <View style={{
          justifyContent:'center',
          alignItems:'center'
      }}>
          {
              isLoading && 
                <ActivityIndicator 
                    style={{position:'absolute'}} 
                    color={"#FFFFFF"} 
                    size={30}
                />
          }
        <Animated.Image
            source={{uri}}
            onLoadEnd={finishloading}
            style={{
                ...style as any,
                // width:'100%',
                // height:400,
                opacity
            }}
        />
      </View>

  )
};
