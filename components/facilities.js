import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Facilities = () => {
  return (
    <View style={styles.facilities}>
      <View style={styles.facilityContainer}>
        <View style={[styles.facilityIcon, styles.facilityIcon]}>
          <Image
            source={require('../assets/images/icons/tickets.png')}
            style={{resizeMode: 'contain', width: 24}}
          />
        </View>
        <Text style={[styles.facilityName, styles.facilityName]}>Tickets</Text>
      </View>

      <View style={styles.facilityContainer}>
        <View style={[styles.facilityIcon]}>
          <Image
            source={require('../assets/images/icons/hotel.png')}
            style={{resizeMode: 'contain', width: 24}}
          />
        </View>
        <Text style={[styles.facilityName]}>Hotel</Text>
      </View>

      <View style={styles.facilityContainer}>
        <View style={[styles.facilityIcon]}>
          <Image
            source={require('../assets/images/icons/food.png')}
            style={{resizeMode: 'contain', width: 24}}
          />
        </View>
        <Text style={[styles.facilityName]}>Food</Text>
      </View>

      <View style={styles.facilityContainer}>
        <View style={[styles.facilityIcon]}>
          <Image
            source={require('../assets/images/icons/beverage.png')}
            style={{resizeMode: 'contain', width: 24}}
          />
        </View>
        <Text style={[styles.facilityName]}>Beverage</Text>
      </View>

      <View style={styles.facilityContainer}>
        <View style={[styles.facilityIcon]}>
          <Image
            source={require('../assets/images/icons/more.png')}
            style={{resizeMode: 'contain', width: 24}}
          />
        </View>
        <Text style={[styles.facilityName]}>More</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  facilities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  facilityContainer: {
    alignItems: 'center',
  },

  facilityIcon: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 110, 110, 0.24)',
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  facilityName: {
    marginTop: 12,
    color: '#FF6E6E',
    fontWeight: '500',
  },
});

export default Facilities;
