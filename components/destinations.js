import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Rating from '../components/rating';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Destinations = () => {
  return (
    <>
      <View style={styles.heading}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>Top Destinations</Text>
        <Text style={{color: '#FF6E6E'}}>See all</Text>
      </View>
      <DestinationCard
        imageSource={require('../assets/images/destinations/Borobudur-great-temple.png')}
        destinationCountry="Indonesia"
        destinationName="Borobudur great temple"
        like={true}
        travelAgent="12"
      />
      <DestinationCard
        imageSource={require('../assets/images/destinations/The-great-mountain-of-fujiyama.png')}
        destinationCountry="Japan"
        destinationName="The great mountain of fujiyama"
        like={false}
        travelAgent="32"
      />
    </>
  );
};

const DestinationCard = ({
  imageSource,
  destinationCountry,
  destinationName,
  like,
  travelAgent,
}) => {
  return (
    <View style={styles.destination}>
      <Image source={imageSource} />
      <View style={styles.destinationCard}>
        <FontAwesome
          style={{position: 'absolute', right: 10, top: 10}}
          name={'heart'}
          color={like ? '#EB5757' : '#828282'}
          size={22}
        />
        <View style={styles.destinationCardContent}>
          <Text style={{color: '#FF6E6E'}}>{destinationCountry}</Text>
          <Text style={{fontSize: 18, fontWeight: '500', lineHeight: 25}}>
            {destinationName}
          </Text>
          <View style={styles.destinationCardContentFooter}>
            <Rating />
            <View style={styles.travelAgentsIcon}>
              <FontAwesome name={'suitcase'} color={'#2D9CDB'} size={12} />
            </View>
            <Text style={{color: '#2D9CDB'}}>{travelAgent} travel agents</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  destination: {
    height: 133,
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  destinationCard: {
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    right: 0,
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    elevation: 8,
    paddingVertical: 15,
  },

  destinationCardContent: {
    width: '80%',
    position: 'relative',
    left: '20%',
    height: '100%',
  },

  destinationCardContentFooter: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },

  travelAgentsIcon: {
    backgroundColor: 'rgba(45,156,219,0.24)',
    flexDirection: 'row',
    height: 28,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
  },
});

export default Destinations;
