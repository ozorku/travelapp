import React from 'react';

import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {styles} from '../assets/styles/styles';
import Continents from '../components/continents';
import Destinations from '../components/destinations';
import {ScrollView} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <SafeAreaView>
        <ScrollView style={[styles.container]}>
          <View style={HomeStyles.topNavigation}>
            <View style={HomeStyles.topNavigationProfile}>
              <Image source={require('../assets/images/userPhoto.png')} />
              <Text style={{marginLeft: 16}}>Hola Adavize!</Text>
            </View>
            <Image source={require('../assets/images/icons/hamburger.png')} />
          </View>

          <Text style={HomeStyles.largeHeadingText}>
            Are you ready to <Text style={{color: '#FF6E6E'}}>travel?</Text>
          </Text>

          <Continents />

          <Destinations navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const HomeStyles = StyleSheet.create({
  topNavigation: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topNavigationProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 14,
    color: '#333',
  },

  largeHeadingText: {
    fontSize: 42,
    fontWeight: '500',
    marginVertical: 40,
  },
});

export default Home;
