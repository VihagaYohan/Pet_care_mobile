import {View, Text, Image, Alert} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

// navigation
import {Routes} from '../../navigation'

const OnboardingScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

  return (
    <Onboarding
      containerStyles={{paddingHorizontal: 0}}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <View>
              <Image
                source={require('../../assets/images/onboarding/onboarding_1.png')}
              />
            </View>
          ),
          title: 'Welcome to Pet Care',
          subtitle:
            'All types of services for your pet in one\nPlace, instantly searchable',
        },
        {
          backgroundColor: '#fff',
          image: (
            <View>
              <Image
                source={require('../../assets/images/onboarding/onboarding_2.png')}
              />
            </View>
          ),
          title: 'Prove experts',
          subtitle: 'We interview every specialist before\nthey get to work',
        },
        {
          backgroundColor: '#fff',
          image: (
            <View>
              <Image
                source={require('../../assets/images/onboarding/onboarding_3.png')}
              />
            </View>
          ),
          title: 'Reliable reviews',
          subtitle: 'A review can be left only by a user\nwho used the service',
        },
      ]}
      titleStyles={{fontWeight: 'bold', fontFamily:"Poppins-Bold"}}
      subTitleStyles={{fontFamily:"Poppins-Regular"}}
      onDone={() => navigation.navigate(Routes.Register)}
    />
  );
};

export default OnboardingScreen;
