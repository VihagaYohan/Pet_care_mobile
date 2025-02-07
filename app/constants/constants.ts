import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

const Spacing = {
    small : 10,
    medium: 15,
    large: 20
}


export default {
    screenWidth: width,
    screenHeight: height,
    spacing: Spacing
}