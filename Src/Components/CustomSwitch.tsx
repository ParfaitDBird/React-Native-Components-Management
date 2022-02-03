import React, { useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

interface Props{
    onChange: (value:boolean)=> void;

}

export const CustomSwitch = ({onChange}:Props) => {
  const {theme:{switchoff,switchon}} = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled( !isEnabled)
        onChange(!isEnabled)
    };
  return (
    <Switch
    trackColor={{ false: switchoff, true: switchon }}
    thumbColor={(Platform.OS==='android') ? "#FFFFFF" : "#f4f3f4"}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
/>
  )
};
