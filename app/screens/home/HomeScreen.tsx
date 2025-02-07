import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'

// components
import {AppContainer, AppText} from '../../components'

// constants
import { COLORS, CONSTANTS } from '../../constants'

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

const HomeScreen = () => {

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