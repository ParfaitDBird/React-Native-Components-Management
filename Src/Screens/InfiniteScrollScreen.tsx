import React, { useContext,useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../Components/HeaderTitle';
import { FadeInImage } from '../Components/FadeInImage';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {
    const {theme:{colors}} = useContext(ThemeContext);
const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
const loadMore = () =>{
    const newArray:number[] = [];
    for(let i = 0; i< 5; i++){
        newArray[i] = numbers.length + i
    }
    setTimeout(() => {
        //setState({})
        setNumbers([...numbers,...newArray])
    }, 100);
} 

const renderItem = (item:number) =>{
        return(
            
            <FadeInImage 
                uri={`https://picsum.photos/id/${item}/200/300`}
                style={{
                    width:'100%',
                    height:400,
                }}
                />

        );
            // <Image
            //     source={{uri:`https://picsum.photos/id/${item}/200/300`}}
            //     style={{
            //         width:'100%',
            //         height:400,
            //     }}
            // /> 
}
  return (
      <View style={{flex:1,}}>
        <FlatList
            data={numbers}
            keyExtractor={(item)=> item.toString() }
            renderItem={({item}) => renderItem(item)}
            ListHeaderComponent={() =>(
                <View style={{marginHorizontal:20   }}>
                    <HeaderTitle title='Infinite Scroll'/>
                </View>
            )            }
            onEndReached={loadMore}
            onEndReachedThreshold={0.3}
            ListFooterComponent={() =>(
                <View style={{
                    height:150,
                    justifyContent:'center',
                    alignItems:'center',
                    width:'100%'
                }}>
                    <ActivityIndicator size={25} color={colors.border}/>
                </View>
            )}
        />
      </View>
  )
};
