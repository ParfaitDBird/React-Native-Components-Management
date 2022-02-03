import React, { useContext } from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../Components/HeaderTitle';
import { styles } from '../Theme/appTheme';
import { ItemSeparator } from '../Components/ItemSeparator';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    },
    {
        casa: "Formatos",
        data: ["tiff", "png", "jpg","iso", "exe", "ptx","docx", "tsx", "json", ]
      }
];

export const CustomSectionListScreen = () => {
  const {theme:{colors}} = useContext(ThemeContext);
  return (
      <View style={{...styles.globalmargin, flex:1}}>
      {/* <HeaderTitle title="Section List"/> */}
      <SectionList
        sections={casas}
        keyExtractor={(item,index)=> item+index}
        ListHeaderComponent={()=> <HeaderTitle title="Section List"/>}
        ListFooterComponent={()=>
            (
            <View style={{marginBottom:60}}>
                <HeaderTitle title={"Sections total: " + casas.length }/>
            </View>
            )}
        renderItem={({item})=> <Text style={{color:colors.text}}>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({section})=> 
        <View style={{backgroundColor:colors.background}}>
            <HeaderTitle title={section.casa}/>
        </View>}
        renderSectionFooter={({section})=>(
            <View>
            <HeaderTitle title={"Total: " + section.data.length}/>
            <ItemSeparator/>
            </View>
        )}
        SectionSeparatorComponent={()=><ItemSeparator/>}
       // ItemSeparatorComponent={()=><ItemSeparator/>}
        showsVerticalScrollIndicator={false}
      />
      </View>
  )
};
