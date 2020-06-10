import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Continents = () => {
  return (
    <View style={styles.continents}>
      <View style={styles.continentContainer}>
        <View style={[styles.continentIcon, styles.continentIconActive]}>
          <Image source={require('../assets/images/icons/AsiaIcon.png')} />
        </View>
        <Text style={[styles.continentName, styles.continentNameActive]}>
          Asia
        </Text>
        <View style={styles.activeDot}></View>
      </View>

      <View style={styles.continentContainer}>
        <View style={[styles.continentIcon]}>
          <Image source={require('../assets/images/icons/EuropeIcon.png')} />
        </View>
        <Text style={[styles.continentName]}>Europe</Text>
      </View>

      <View style={styles.continentContainer}>
        <View style={[styles.continentIcon]}>
          <Image source={require('../assets/images/icons/AmericaIcon.png')} />
        </View>
        <Text style={[styles.continentName]}>America</Text>
      </View>

      <View style={styles.continentContainer}>
        <View style={[styles.continentIcon]}>
          <Image source={require('../assets/images/icons/AfricaIcon.png')} />
        </View>
        <Text style={[styles.continentName]}>Africa</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  continentContainer: {
    alignItems: 'center',
  },

  continentIcon: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(255, 110, 110, 0.24)',
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  continentIconActive: {
    backgroundColor: '#FF6E6E',
  },

  continentName: {
    marginTop: 12,
    color: '#4F4F4F',
    fontWeight: '700',
  },

  continentNameActive: {
    color: '#FF6E6E',
  },

  activeDot: {
    backgroundColor: '#FF6E6E',
    height: 8,
    width: 8,
    borderRadius: 50,
    marginTop: 6,
  },
});

export default Continents;
