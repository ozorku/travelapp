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

import RBSheet from 'react-native-raw-bottom-sheet';
import NextPageNav from '../components/nextPageNav';

import Facilities from '../components/facilities';

const travelAgents = [
  {
    id: 1,
    name: 'Barokah international tour & travel',
    discount: '-12',
    oldPrice: '2500',
    newPrice: '2200',
    image: require('../assets/images/travelagents/Barokah.png'),
  },
  {
    id: 2,
    name: 'Wijayakusuma tour & Travel agent',
    oldPrice: '3500',
    newPrice: '3000',
    discount: '-14',
    image: require('../assets/images/travelagents/OmiseGO.png'),
  },
  {
    id: 3,
    name: 'Cartenz Travel Specialist',
    oldPrice: '6500',
    newPrice: '6200',
    discount: '-12',
    image: require('../assets/images/travelagents/Cartenz.png'),
  },
  {
    id: 4,
    image: require('../assets/images/travelagents/NNN.png'),
    name: 'NNN international tour & travel',
    oldPrice: '2500',
    newPrice: '2200',
    discount: '-12',
  },
  {
    id: 5,
    image: require('../assets/images/travelagents/NNN2.png'),
    name: 'NNN2 international tour & travel',
    oldPrice: '2500',
    newPrice: '2200',
    discount: '-14',
  },
];

const ChooseTravelAgent = ({navigation}) => {
  const [viewingCurrentAgent, setViewingCurrentAgent] = useState({});
  const [totalTravellers, setTotalTravellers] = useState(0);

  const setData = (payload) => {
    let getItem = travelAgents.find((travelAgent) => {
      return travelAgent.id === payload;
    });
    setViewingCurrentAgent(getItem);
  };
  return (
    <View>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <ScrollView style={{backgroundColor: '#eee', height: '100%'}}>
          <View style={{paddingHorizontal: 20, backgroundColor: '#ffffff'}}>
            <ScreenTopNav
              navigation={navigation}
              showEllipse={false}
              title="Choose a travel agent"
            />
            <View style={componentStyle.heading}>
              <Text style={{paddingVertical: 10}}>
                Showing 12 travel agents
              </Text>
              <TouchableOpacity>
                <Text style={componentStyle.filterButton}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            {travelAgents.map((travelAgent) => {
              return (
                //
                <TouchableOpacity
                  key={travelAgent.id}
                  style={componentStyle.travelAgentCard}
                  onPress={() => {
                    this.RBSheet.open();
                    setData(travelAgent.id);
                  }}>
                  <View style={{width: '32%'}}>
                    <Image
                      source={travelAgent.image}
                      alt="image"
                      style={{flex: 1, width: 100, resizeMode: 'contain'}}
                    />
                  </View>
                  <View style={componentStyle.travelAgentCardRight}>
                    <Text
                      style={{fontSize: 24, fontWeight: '500', color: '#333'}}>
                      {travelAgent.name}
                    </Text>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          marginRight: 10,
                          color: '#bbb',
                          textDecorationLine: 'line-through',
                          textDecorationColor: '#000',
                        }}>
                        ${travelAgent.oldPrice}
                      </Text>
                      <Text
                        style={{
                          marginRight: 10,
                          color: '#FF6E6E',
                          fontWeight: '500',
                        }}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                          ${travelAgent.newPrice}
                        </Text>
                        /day
                      </Text>
                      <View
                        style={{
                          borderRadius: 5,
                          backgroundColor: '#FF6E6E',
                          padding: 5,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                          }}>
                          {travelAgent.discount}%
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                //
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
      <RBSheet
        ref={(ref) => {
          this.RBSheet = ref;
        }}
        height={650}
        closeOnDragDown={true}
        openDuration={250}
        customStyles={{
          container: {
            borderTopRightRadius: 60,
          },
        }}>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                width: 70,
                height: 70,
                marginRight: 15,
              }}
              source={viewingCurrentAgent.image}
            />
            <View style={{width: '70%'}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '400',
                }}>
                {viewingCurrentAgent.name}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{marginBottom: 20, color: '#333'}}>Facilities</Text>
            <Facilities />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{marginBottom: 10, color: '#4F4F4F'}}>Payment</Text>
            <Text
              style={{
                color: '#333',
                fontSize: 32,
                fontWeight: 'bold',
              }}>
              ${viewingCurrentAgent.newPrice}
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{color: '#4F4F4F', marginBottom: 10}}>Promo code</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 10,
              }}>
              <TextInput
                value=""
                style={{height: 50, width: '80%', paddingHorizontal: 10}}
              />
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'rgba(255, 110, 110, 0.24)',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: 20,
                  }}
                  source={require('../assets/images/icons/tag.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{color: '#4F4F4F', marginBottom: 10}}>
              number of travelers
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#333', fontSize: 32, fontWeight: 'bold'}}>
                {totalTravellers}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => setTotalTravellers(totalTravellers - 1)}
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'rgba(255, 110, 110, 0.24)',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      width: 20,
                    }}
                    source={require('../assets/images/icons/minus.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setTotalTravellers(totalTravellers + 1)}
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#FF6E6E',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  }}>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      width: 20,
                    }}
                    source={require('../assets/images/icons/plus.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <NextPageNav
          navigateTo="Payment"
          navigation={navigation}
          text="Payment method"
          iconName="arrowright"
        />
      </RBSheet>
    </View>
  );
};

const componentStyle = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  travelAgentCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
  travelAgentCardRight: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '68%',
  },
  filterButton: {
    borderColor: '#FF6E6E',
    color: '#FF6E6E',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 12,
    paddingVertical: 10,
  },
});

export default ChooseTravelAgent;
