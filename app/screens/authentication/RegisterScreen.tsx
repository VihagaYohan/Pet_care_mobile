import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

// components
import {AppContainer, AppButton, AppTextButton} from '../../components/';

// constants
import {COLORS, CONSTANTS} from '../../constants';

// navigation
import {Routes} from '../../navigation/'

const RegisterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  return (
    <AppContainer>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.linearGradient}>
        <View style={{flex:1, justifyContent:'flex-start', alignItems:'center'}}>
          {/* title */}
          <View style={{alignSelf:'flex-start'}}>
            <Text style={styles.title}>Welcome</Text>
            <View style={styles.titleSecondLine}>
              <Text style={styles.title}>to</Text>
              <Text style={[styles.title, styles.richText]}>Pet Care</Text>
            </View>
          </View>

          {/* subtitle */}
          <Text style={styles.subtitle}>
            Join our pet-loving community and keep your furry friends happy and
            healthy
          </Text>

          <AppButton
            label="Continue with Google"
            showIcon={true}
            IconComponent={AntDesignIcon}
            iconName="google"
            iconSize={20}
            iconColor={COLORS.primary}
            onPress={() => console.log('button clicked')}
            isPrimary={false}
          />

          <View style={styles.signInContainer}>
            <Text style={{fontFamily:"Poppins-Regular", fontSize: 13, color: COLORS.white}}>Already have an account?</Text>
            <AppTextButton label='Sign In' onPress={() => navigation.navigate(Routes.Bottom)}
              textStyle={styles.signInText}/>
          </View>
        </View>
      </LinearGradient>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: CONSTANTS.spacing.large * 1.5,
    paddingVertical: CONSTANTS.spacing.large * 3.5,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 44,
    lineHeight: 50,
    color: COLORS.white,
  },
  titleSecondLine: {
    flexDirection: 'row',
  },
  richText: {
    color: COLORS.yellow,
    marginLeft: CONSTANTS.spacing.small,
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.white,
    fontSize: 13,
    marginVertical: CONSTANTS.spacing.medium,
  },
  signInContainer: {
    flexDirection:'row',
    marginVertical: CONSTANTS.spacing.large
  },
  signInText: {
    color: COLORS.white,
    marginLeft: CONSTANTS.spacing.small
  }
});

export default RegisterScreen;
