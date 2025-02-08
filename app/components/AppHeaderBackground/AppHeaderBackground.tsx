import { View, Text } from 'react-native'
import React from 'react'
import {LinearGradient} from 'react-native-linear-gradient'
import { COLORS } from '../../constants'

const AppHeaderBackground = () => {
  return (
     <LinearGradient start={{x: 0, y: 0}} end={{x: 10, y: 10}} colors={[COLORS.white2, COLORS.white]} style={{flex:1}}/>
  )
}

export default AppHeaderBackground