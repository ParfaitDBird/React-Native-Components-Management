
import React, { useContext } from 'react';
import { View } from "react-native";
import { ThemeContext } from '../Context/themeContext/ThemeContext';


export const ItemSeparator = () => {
  
  const {theme:{dividerColor}} = useContext(ThemeContext);
  return (
    <View
    style ={{
        borderBottomWidth: 3,
        opacity: 0.3,
        marginVertical: 8,
        borderBottomColor:dividerColor
    }}
    ></View>
  )
};

