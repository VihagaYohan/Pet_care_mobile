import { View, ScrollView, StyleSheet, Modal, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'

// components
import {AppContainer, AppText, AppHeaderBackground, AppGradientBackground} from '../../components'

// constants
import { COLORS, CONSTANTS } from '../../constants'

// navigation
import {Routes} from '../../navigation'

// widgets
import {SearchWidget} from '../../widgets'

interface servicesTypes {
  imageUrl: any,
  label: string
}

const SERVICES: servicesTypes[] = [
  {
    imageUrl:require('../../assets/images/homePage/veterinary.png'),
    label: 'Veterinary'
  }, 
  {
    imageUrl:require('../../assets/images/homePage/grooming.png'),
    label: 'Grooming'
  },
  {
    imageUrl:require('../../assets/images/homePage/boarding.png'),
    label: 'Pet boarding'
  },
  {
    imageUrl:require('../../assets/images/homePage/adoption.png'),
    label: 'Adoption'
  },
  {
    imageUrl:require('../../assets/images/homePage/dog_walking.png'),
    label: 'Dog walking'
  },
  {
    imageUrl:require('../../assets/images/homePage/training.png'),
    label: 'Training'
  },
  {
    imageUrl:require('../../assets/images/homePage/taxi.png'),
    label: 'Pet taxi'
  },
  {
    imageUrl:require('../../assets/images/homePage/date.png'),
    label: 'Pet date'
  },
  {
    imageUrl:require('../../assets/images/homePage/other.png'),
    label: 'Other'
  },
]

const HomeScreen = ({navigation, route}: {
  navigation: NativeStackNavigationProp<any,any>,
  route: RouteProp<any,any>
}) => {

  const [visible, setVisible] = useState<boolean>(false)

  // navigation settings
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle:"",
      headerRight:(props) => {
        return (
          <TouchableOpacity onPress={() => setVisible(true)}>
            <MagnifyingGlassIcon color={COLORS.primary} size={30} style={{marginRight: CONSTANTS.spacing.medium}}/>
          </TouchableOpacity>
        )
      },
      headerBackground() {
        return (
          <AppHeaderBackground/>
        )
      },
    })
  })

  return (
    <AppContainer>
      <LinearGradient  start={{x: 0, y: 0}} end={{x: 10, y: 10}} colors={[COLORS.white2, COLORS.white]} style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          {/* title */}
          <React.Fragment>
            <AppText label='What are you' textStyle={styles.titleText}/>
            <View style={styles.richTextContainer}>
              <AppText textStyle={styles.titleText} label='looking for,'/>
              <AppText textStyle={styles.richText} label='Maria ?'/>
            </View>
          </React.Fragment>

          {/* services grid */}
          <View style={styles.gridContainer}>
            {SERVICES.map((item) => (
              <TouchableOpacity key={item.label} style={styles.gridItem} onPress={() => console.log("service item clicked")}>
                  <Image source={item.imageUrl}
                  style={styles.imageStyle}/>

                  <AppText label={item.label} textStyle={styles.labelStyle}/>
              </TouchableOpacity>
            ))}
          </View>
          
        </ScrollView>

         <SearchWidget
         visible={visible}
         onClose={() => setVisible(false)}/>
      </LinearGradient>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex:1,
    padding: CONSTANTS.spacing.large
  },
  scrollViewStyle: {
    paddingVertical: CONSTANTS.spacing.large * 3
  },
  titleText: {
    fontFamily:"Poppins-Bold",
    fontSize: 30
  },
  richTextContainer: {
    flexDirection:'row'
  },
  richText: {
    fontFamily:"Poppins-Bold",
    fontSize: 30,
    color: COLORS.yellow,
    marginLeft: CONSTANTS.spacing.small
  },
  gridContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    padding: CONSTANTS.spacing.small
  },
  gridItem: {
    width: '30%',
    aspectRatio: 1,
    margin: '1.5%', 
    backgroundColor: COLORS.white,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: CONSTANTS.spacing.medium * 2,
    paddingHorizontal: CONSTANTS.spacing.small / 2,
    shadowColor: "#000",
  },
  imageStyle:{
    width: 50,
    height: 50,
    resizeMode:"contain"
  },
  labelStyle: {
    fontSize: 12,
    fontFamily:"Poppins-Medium"
  }
})

export default HomeScreen