import {StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants';

interface propTypes {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
}

const AppBackgroundGradient = ({children, containerStyle}: propTypes) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 10, y: 10}}
      colors={[COLORS.white2, COLORS.white]}
      style={[styles.container, containerStyle]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppBackgroundGradient;
