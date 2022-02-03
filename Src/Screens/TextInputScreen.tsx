import React, { useContext, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { HeaderTitle } from '../Components/HeaderTitle';
import { useForm } from '../Hooks/useForm';
import { styles } from '../Theme/appTheme';
import { CustomSwitch } from '../Components/CustomSwitch';
import { ThemeContext } from '../Context/themeContext/ThemeContext';
export const TextInputScreen = () => {
    const {theme:{colors}} = useContext(ThemeContext);
    const {form,onChange}=useForm({
        name:'',
        email:'',
        phone:'',
        isSubscribed: false
    });
  return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
        >
            <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            

            <View style={styles.globalmargin}>
            <HeaderTitle title='Text Inputs'/>
            <TextInput 
                style={{...txtinputstyles.inputstyle,borderColor:colors.border,color:colors.text}}
                placeholder='Ingrese su nombre'
                autoCorrect={false}
                autoCapitalize='words'
                onChangeText={(value) => onChange(value,'name')}
                placeholderTextColor={colors.border}
                />

            <TextInput 
                style={{...txtinputstyles.inputstyle,borderColor:colors.border, color:colors.text}}
                placeholder='Ingrese su email'
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(value) => onChange(value,'email')}
                keyboardType='email-address'
                placeholderTextColor={colors.border}
                />
                <View style={txtinputstyles.switchRow}>
                <Text style={{...txtinputstyles.Switchtext,color:colors.text}}>Subscribed</Text>
                <CustomSwitch  onChange={(value)=> onChange(value,'isSubscribed')}/>
            </View>
            <TextInput 
                style={{...txtinputstyles.inputstyle,borderColor:colors.border,color:colors.text}}
                placeholder='Ingrese su telefono'
                onChangeText={(value) => onChange(value,'phone')}
                keyboardType='phone-pad'
                placeholderTextColor={colors.border}
                />
            <HeaderTitle title={JSON.stringify(form,null,3)}/>
            
            <View style={{height:100}}/> 
            </View>  
            </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
      
  )
};

const txtinputstyles = StyleSheet.create({
    inputstyle:{
        borderWidth: 3,
        
        fontWeight: 'bold',
        paddingHorizontal:10,
        borderRadius:10,
        marginVertical:10,
    },
    switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    Switchtext:{
        fontSize:25,
        fontWeight:'bold'
    },
});