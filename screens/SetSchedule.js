import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {styles} from '../assets/styles/styles';

import ScreenTopNav from '../components/screenTopNav';
import NextPageNav from '../components/nextPageNav';

const SetSchedule = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <SafeAreaView>
        <View style={[styles.container]}>
          <ScreenTopNav
            navigation={navigation}
            showEllipse={true}
            title="Set the schedule"
          />
        </View>
      </SafeAreaView>
      <NextPageNav
        navigateTo="ChooseTravelAgent"
        navigation={navigation}
        text="Choose a travel agent"
        iconName="arrowright"
      />
    </View>
  );
};

export default SetSchedule;
