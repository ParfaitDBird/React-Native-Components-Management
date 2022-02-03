import React, { useContext } from 'react';
import { ImageSourcePropType, View, SafeAreaView, Text, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

const {height: screenHeight, width:screenWidth}=Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]
interface Props extends StackScreenProps<any,any>{};
export const SlidesScreen = ({navigation}:Props) => {

    const {theme:{colors,button,dotcolor}} = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const renderItem = (item: Slide) => {
        return(
            <View style={{
                flex:1,
                backgroundColor:colors.background,
                borderRadius:5,
                padding:40,
                justifyContent:'center'
            }}>
               <Image
                source={item.img}
                style={{
                    width:350,
                    height:400,
                    resizeMode:'center'
                }}
               />
               <Text style={{...styles.title, color:colors.text}}>{item.title}</Text>
               <Text style={{...styles.subtitle, color:colors.text}}>{item.desc}</Text>
            </View>
        )
    }
    
  return (
      <SafeAreaView
        style={{
            flex: 1,
            paddingTop:50,
        }}
      >
          <Carousel
              //ref={(c) => { this._carousel = c; }}
              data={items}
              renderItem={({item})=>renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout='default'
              onSnapToItem={(index) => {
                setActiveIndex(index)
              }}
            />
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginHorizontal:20,
                alignItems:'center',
                }}>
                <Pagination
                dotsLength={items.length}
                activeDotIndex={activeIndex}
                dotStyle={{
                    width:10,
                    height:10,
                    borderRadius:10,
                    backgroundColor:dotcolor
                }}
                />

                <TouchableOpacity style={{
                    flexDirection:'row',
                   //backgroundColor:'rgba(1, 253, 136, 0.3)',
                    backgroundColor:button,
                    width:135,
                    height:50,
                    borderRadius:25,
                    justifyContent:'center',
                    alignItems:'center',
                    shadowOpacity:0.2,
                    elevation:2,
                    display: activeIndex == 2 ? 'flex' : 'none',
                }}
                activeOpacity={0.9}
                onPress={()=>{navigation.navigate("HomeScreen")}}
                >
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}>Home</Text>
                <Icon 
                    name='chevron-forward-outline'
                    color='white'
                    size={40}
                />
                </TouchableOpacity>
            </View>
          

      </SafeAreaView>
  )
};
const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    },
    subtitle:{
        fontSize:16
    },
});