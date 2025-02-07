import { View, Text, TouchableOpacity, TextStyle, StyleSheet } from 'react-native'
import React from 'react'

// constants
import { COLORS } from '../../constants'

interface propTypes {
    label: string,
    onPress: () => void,
    textStyle?: TextStyle
}

const AppTextButton = ({label, onPress, textStyle}: propTypes) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text style={[styles.textStyle, textStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        color: COLORS.primary,
        fontFamily:'Poppins-Medium',
        fontSize: 13
    }
})

export default AppTextButton