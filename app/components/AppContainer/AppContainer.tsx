import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

interface propTypes {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
}

const AppContainer = ({children, containerStyle}: propTypes) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppContainer;
