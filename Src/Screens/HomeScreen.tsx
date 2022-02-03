import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../Theme/appTheme';
import { FlatListMenuItem } from '../Components/FlatListMenuItem';
import { menuItems } from '../Data/menuItems';
import { HeaderTitle } from '../Components/HeaderTitle';
import { ItemSeparator } from '../Components/ItemSeparator';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

export const HomeScreen = () => {



    const {theme:{colors}} = useContext(ThemeContext);
    return (
        <View style={{
            ...styles.globalmargin,
            flex:1, 
            backgroundColor:colors.background
            }}>
        <FlatList
        data={menuItems}    
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/> }
        keyExtractor={(item)=> item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú"/>}
        ItemSeparatorComponent={()=> <ItemSeparator/>}
         />
        </View>
    )
}
