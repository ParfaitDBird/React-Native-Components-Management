import React, { useContext } from "react";
import { Text, View,StyleSheet } from "react-native";
import { MenuItem } from '../Interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from "../Context/themeContext/ThemeContext";

interface Props {
    menuItem: MenuItem
}


export const FlatListMenuItem = ({menuItem}: Props) => {

    const navigation =useNavigation()
    const {theme:{colors,icon}} = useContext(ThemeContext)
    return(
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={()=> navigation.navigate(menuItem.component as any)}>
            <View style={styles.container}>
            <Icon
                name={menuItem.icon}
                color={icon}
                size={23}

            />
            <Text style={{
                ...styles.itemText,
                color:colors.text
                }}>{menuItem.name}</Text>
            <View style={styles.spacer}/>
            <Icon
                name='chevron-forward-outline'
                color={icon}
                size={25}
            />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingLeft:5
    },
    itemText:{
        marginLeft: 8,
        fontWeight:'bold',
        fontSize:16
    },
    spacer:{
        flex: 1
    }
});