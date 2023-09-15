/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../../../assets/logo.png')} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 102,
  },
});
