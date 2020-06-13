import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {styles} from '../assets/styles/styles';
import ScreenTopNav from '../components/screenTopNav';
import NextPageNav from '../components/nextPageNav';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';

import Rating from '../components/rating';

const DestinationDetailScreen = ({navigation}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <SafeAreaView>
        <ScrollView
          scrollEnabled={readMore}
          style={[styles.container, {height: '100%'}]}>
          <ScreenTopNav navigation={navigation} showEllipse={true} title="" />
          <View style={componentStyle.cardStyle}>
            <ImageBackground
              source={require('../assets/images/destinations/borobudur-large.png')}
              style={componentStyle.bgImageStyle}
              imageStyle={{borderRadius: 12}}
            />
            <View style={componentStyle.likeAction}>
              <FontAwesome name="heart" size={24} color="#EB5757" />
            </View>
          </View>
          <Text style={componentStyle.destinationName}>
            Borobudur great temple
          </Text>
          <View style={componentStyle.destinationLocation}>
            <MaterialIcons
              style={{marginRight: 10}}
              name="location-on"
              size={18}
              color="#828282"
            />
            <Text style={{color: '#828282'}}>Yogyakarta, Indonesia</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Rating />
            <Text>picturs</Text>
          </View>
          <Text style={componentStyle.title}>Description</Text>
          <Text style={componentStyle.summary}>
            This famous Buddhist temple, dating from the 8th and 9th centuries,
            is located in central Java. It was built in three tiers: a pyramidal
            base with five concentric square terraces, the trunk of a cone with
            three circular platforms and, at the top, a monumental stupa. The
            walls and balustrades are decorated with fine low{' '}
          </Text>
        </ScrollView>

        <LinearGradient
          // colors={['#fff', 'transparent']}
          colors={['transparent', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)']}
          style={[
            componentStyle.readMoreLinearBg,
            {display: readMore ? 'none' : 'flex'},
          ]}>
          <TouchableOpacity
            onPress={() => setReadMore(true)}
            style={componentStyle.readMoreButton}>
            <Text style={{fontSize: 18, color: '#EB5757'}}>Read More</Text>
          </TouchableOpacity>
        </LinearGradient>

        <NextPageNav
          navigation={navigation}
          text="Set the schedule"
          iconName="arrowright"
        />
      </SafeAreaView>
    </View>
  );
};

const componentStyle = StyleSheet.create({
  cardStyle: {
    height: 254,
    width: '100%',
    marginTop: 15,
    shadowColor: 'rgba(51,51,51, 1)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 9,
    elevation: 10,
  },
  bgImageStyle: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  likeAction: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    padding: 2,
    zIndex: 5,
    bottom: -20,
    right: 15,
    borderRadius: 50,
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  destinationName: {
    marginTop: 30,
    fontSize: 30,
    color: '#333',
    fontWeight: '600',
  },
  destinationLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 24,
    fontWeight: '400',
    color: '#333333',
  },
  summary: {
    fontSize: 18,
    color: '#4f4f4f',
    lineHeight: 30,
  },
  readMoreLinearBg: {
    paddingTop: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 70,
    width: '100%',
  },
  readMoreButton: {
    borderColor: '#EB5757',
    borderWidth: 1,
    width: 150,
    borderRadius: 6,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DestinationDetailScreen;
