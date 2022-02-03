import React, { useContext } from 'react';
import { View,ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../Components/HeaderTitle';
import { styles } from '../Theme/appTheme';
import { useState } from 'react';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {theme:{colors}} = useContext(ThemeContext);
  const [isrefreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh=()=>{
    setRefreshing(true);
    setTimeout(() => {
        //console.log("terminamos");
        setRefreshing(false);
        setData("Hola mundo")
    }, 1300);
  }
    return (
      <ScrollView
        refreshControl={
                <RefreshControl
                refreshing={isrefreshing}
                onRefresh={onRefresh}
                progressBackgroundColor={colors.border}
                //colors={['white','red','blue']}
                colors={['white']}
                />
        }
      >
        <View style={styles.globalmargin}>
          <HeaderTitle title="Pull 2 refresh"></HeaderTitle>
          {
            data &&  <HeaderTitle title={data}></HeaderTitle>
          }
        </View>
      </ScrollView>
  )
};
