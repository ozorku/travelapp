import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {styles} from '../assets/styles/styles';

import ScreenTopNav from '../components/screenTopNav';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';

import NextPageNav from '../components/nextPageNav';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Checkout = ({navigation}) => {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <ScrollView style={{backgroundColor: '#eee', height: '100%'}}>
          <View
            style={{
              paddingHorizontal: 20,
              backgroundColor: '#ffffff',
              paddingBottom: 20,
            }}>
            <ScreenTopNav
              navigation={navigation}
              showEllipse={true}
              title="Checkout"
            />
          </View>
          <View style={[styles.container, {marginTop: 20}]}>
            <Text style={{color: '#4F4F4F', fontWeight: '500'}}>
              Destination
            </Text>
            <View style={componentStyle.smallCard}>
              <Image
                source={require('../assets/images/destinations/The-great-mountain-of-fujiyama.png')}
              />
              <View style={componentStyle.smallCardContent}>
                <View>
                  <Text style={{color: '#FF6E6E'}}>Indonesia</Text>
                  <Text
                    style={{fontSize: 24, fontWeight: '500', lineHeight: 25}}>
                    Borobudur great temple
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesome
                    style={{marginRight: 10}}
                    name="calendar"
                    size={18}
                    color="#2D9CDB"
                  />
                  <Text style={{color: '#2D9CDB'}}>12-17 March 2020</Text>
                </View>
              </View>
            </View>

            <Text style={{color: '#4F4F4F', fontWeight: '500', marginTop: 30}}>
              Travel agent
            </Text>
            <View style={componentStyle.smallCard}>
              <View>
                <Image
                  source={require('../assets/images/travelagents/Barokah.png')}
                  style={{flex: 1, width: 80, resizeMode: 'contain'}}
                />
              </View>
              <View style={componentStyle.smallCardContent}>
                <View>
                  <Text
                    style={{fontSize: 24, fontWeight: '500', lineHeight: 25}}>
                    Barokah international tour & travel
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    style={{marginRight: 10}}
                    name="md-people"
                    size={18}
                    color="#2D9CDB"
                  />
                  <Text style={{color: '#2D9CDB'}}>15 Travelers</Text>
                </View>
              </View>
            </View>
            <Text style={{color: '#4F4F4F', fontWeight: '500', marginTop: 30}}>
              Payment details
            </Text>
            <View style={componentStyle.largeCard}>
              <View style={componentStyle.largeCardRow}>
                <Text style={componentStyle.largeCardRowLabel}>
                  Payment method
                </Text>
                <View>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      width: 42,
                    }}
                    source={require('../assets/images/visa.png')}
                  />
                </View>
              </View>
              <View style={componentStyle.largeCardRow}>
                <Text style={componentStyle.largeCardRowLabel}>
                  5 Days travel
                </Text>
                <Text>$15,000</Text>
              </View>
              <View style={componentStyle.largeCardRow}>
                <Text style={componentStyle.largeCardRowLabel}>Promo</Text>
                <Text>-</Text>
              </View>
              <View style={componentStyle.largeCardRow}>
                <Text
                  style={[componentStyle.largeCardRowLabel, {color: '#000'}]}>
                  Total
                </Text>
                <Text style={{color: '#FF6E6E', fontSize: 16}}>$15,000</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <NextPageNav
          navigateTo="Home"
          navigation={navigation}
          text="Book Now"
          iconName="check"
        />
      </SafeAreaView>
    </View>
  );
};

const componentStyle = StyleSheet.create({
  smallCard: {
    height: 133,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    padding: 15,
  },

  smallCardContent: {
    height: '100%',
    width: '70%',
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  largeCard: {
    borderRadius: 12,
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  largeCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    alignItems: 'center',
  },
  largeCardRowLabel: {fontSize: 16, color: '#828282'},
});

export default Checkout;
