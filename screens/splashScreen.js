import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 2000);

  return (
    <View style={style.center}>
      <Image source={require('../assets/images/logo.png')} />
    </View>
  );
};

const style = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6E6E',
  },
});

export default SplashScreen;
