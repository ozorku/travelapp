import React from 'react';
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
import {TouchableOpacity} from 'react-native-gesture-handler';

const TravelAgentCard = () => {
  return (
    <TouchableOpacity style={componentStyle.travelAgentCard}>
      <View style={{width: '32%'}}>
        <Image
          source={require('../assets/images/destinations/The-great-mountain-of-fujiyama.png')}
          alt="image"
        />
      </View>
      <View style={componentStyle.travelAgentCardRight}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#333'}}>
          Barokah international tour & travel
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 10, color: '#bbb'}}>$2500</Text>
          <Text style={{marginRight: 10, color: '#FF6E6E', fontWeight: '500'}}>
            $2500/day
          </Text>
          <View
            style={{borderRadius: 5, backgroundColor: '#FF6E6E', padding: 5}}>
            <Text
              style={{
                color: 'white',
              }}>
              12%
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ChooseTravelAgent = ({navigation}) => {
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{paddingVertical: 10}}>
                Showing 12 travel agents
              </Text>
              <TouchableOpacity>
                <Text style={componentStyle.filterButton}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <TravelAgentCard />
            <TravelAgentCard />
            <TravelAgentCard />
            <TravelAgentCard />
            <TravelAgentCard />
            <TravelAgentCard />
            <TravelAgentCard />
            <TravelAgentCard />
            <TravelAgentCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const componentStyle = StyleSheet.create({
  travelAgentCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
  travelAgentCardRight: {
    marginLeft: 20,
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
