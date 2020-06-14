import React from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import {styles} from '../assets/styles/styles';

import ScreenTopNav from '../components/screenTopNav';

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
            <Text style={{paddingVertical: 10}}>ss</Text>
          </View>
          <View style={styles.container}>
            <Text>hello</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ChooseTravelAgent;
