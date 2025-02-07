import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'; 

// constants
import { CONSTANTS, COLORS } from '../../constants'

interface propTypes {
    isPrimary: boolean,
    label: string,
    onPress: () => void,
    showIcon?: boolean,
    IconComponent ?: React.ComponentType<IconProps>,
    iconName?: string,
    iconSize?: number,
    iconColor?: string,
}

const AppButton = ({isPrimary, label, onPress, showIcon, IconComponent, iconName, iconSize, iconColor}: propTypes) => {
    return (
        <TouchableOpacity onPress={() => onPress()}
        style={[styles.container,{
            backgroundColor: isPrimary == true ? COLORS.primary : COLORS.white
        }]}>
            {showIcon && IconComponent && iconName && (
                <IconComponent name={iconName} size={iconSize} color={iconColor}/>
            )}

            <Text style={[styles.buttonText, {
                color: isPrimary == true ? COLORS.white: COLORS.primary
            }]}>{label}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: CONSTANTS.spacing.large * 5,
        paddingVertical: CONSTANTS.spacing.small, 
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        width: '100%'
    },
    buttonText: {
        marginLeft: CONSTANTS.spacing.small,
        fontFamily:"Poppins-Medium", 
        fontSize: 13
    }
})

export default AppButton