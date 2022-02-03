import React, { useContext, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../Components/HeaderTitle';
import { styles } from '../Theme/appTheme';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

export const ModalScreen = () => {
  const {theme:{colors,button,modal}} = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);
  return (
      <View style={styles.globalmargin}>
          <HeaderTitle title="Modal Screen"/>
          
          <Button
            title='Abrir modal'
            onPress={()=>{setIsVisible(true)}}
            color={button}
          />
          <Modal
            animationType='fade'
            visible={isVisible}
            transparent={true}
          >
              {/* BACKGROUND DARK */}
              <View style={{
                  flex:1,
                  //width:100,
                  //height:100,
                  //backgroundColor:'rgba(1, 253, 136, 0.3)',
                  justifyContent:'center',
                  alignItems:'center'
              }}>

                {/* Modal content */}
              <View style={{
                  backgroundColor:modal,
                  width:250,
                  height:180,
                  justifyContent:'center',
                  alignItems:'center',
                  shadowOffset:{
                      width:0,
                      height:10,
                  },
                  shadowOpacity:0.2,
                  elevation:0.3,
                  borderRadius:5,   
              }}>
                <Text style={{fontSize:20,fontWeight:'bold', color:colors.text}}> Modal </Text>
                <Text style={{fontSize:16,fontWeight:'300',marginBottom:20,color:colors.text}}>Cuerpo del modal</Text>
                <Button
                    title='Close'
                    onPress={() => setIsVisible(false)}
                    color={button}
                />
              </View>

              </View>



          </Modal>
      </View>
  )
};
