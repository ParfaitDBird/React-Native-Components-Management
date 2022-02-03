import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../Components/CustomSwitch';
import { HeaderTitle } from '../Components/HeaderTitle';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

export const SwitchScreen = () => {
    const {theme:{colors}} = useContext(ThemeContext);
    const [state, setState] = useState({
        isActive: false,
        isHungry: false,
        isHappy:false,
    });
    const onChange = (value: boolean,field: string) =>{
        setState({
            ...state,
            [field]:value
        })
    }

  return (
      <View style={{marginHorizontal:20,}}>
          <HeaderTitle title="Switches"/>
          <View style={styles.switchRow}>
                <Text style={{...styles.Switchtext,color:colors.text}}>isActive</Text>
                <CustomSwitch  onChange={(value)=> onChange(value,'isActive')}/>
            </View>
            <View style={styles.switchRow}>
                <Text style={{...styles.Switchtext,color:colors.text}}>isHungry</Text>
                <CustomSwitch  onChange={(value)=> onChange(value,'isHungry')}/>
            </View>
            <View style={styles.switchRow}>
                <Text style={{...styles.Switchtext,color:colors.text}}>isHappy</Text>
                <CustomSwitch  onChange={(value)=> onChange(value,'isHappy')}/>
            </View>
            <Text style={{...styles.Switchtext,color:colors.text}}>
                {JSON.stringify(state,null,5)}
            </Text>
      </View>
  )
};

const styles = StyleSheet.create({
    Switchtext:{
        fontSize:25,
    },
    switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});
