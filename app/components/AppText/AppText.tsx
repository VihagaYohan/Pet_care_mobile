import { View, Text, TextStyle, StyleSheet } from 'react-native'
import React from 'react'

interface propTypes {
    label: string,
    textStyle?: TextStyle
}

const AppText = ({label, textStyle}: propTypes) => {
  return (
    <Text style={[styles.textStyle, textStyle]}>{label}</Text>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "Poppins-Regular"
    }
})

export default AppText