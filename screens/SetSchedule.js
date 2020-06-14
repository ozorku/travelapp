import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Switch,
} from 'react-native';
import {styles} from '../assets/styles/styles';

import ScreenTopNav from '../components/screenTopNav';
import NextPageNav from '../components/nextPageNav';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SetSchedule = ({navigation}) => {
  const [homeOption, setHomeOption] = useState(false);
  const [addressOption, setAddressOption] = useState(false);

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <SafeAreaView>
        <View style={[styles.container]}>
          <ScreenTopNav
            navigation={navigation}
            showEllipse={true}
            title="Set the schedule"
          />
          <View style={{marginTop: 50}}>
            <Text>Start</Text>
            <View style={componentStyle.dateContainer}>
              <View style={{flex: 1, marginRight: 30}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value="16"
                />
                <Text style={{color: '#828282'}}>Day</Text>
              </View>
              <View style={{flex: 2, marginRight: 30}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value="March"
                />
                <Text style={{color: '#828282'}}>Month</Text>
              </View>
              <View style={{flex: 2}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value="2020"
                />
                <Text style={{color: '#828282'}}>Year</Text>
              </View>
            </View>
          </View>
          <FontAwesome
            name="exchange"
            size={24}
            style={{marginVertical: 25, textAlign: 'center'}}
          />
          <View>
            <Text>End</Text>
            <View style={componentStyle.dateContainer}>
              <View style={{flex: 1, marginRight: 30}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value="16"
                />
                <Text style={{color: '#828282'}}>Day</Text>
              </View>
              <View style={{flex: 2, marginRight: 30}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value="March"
                />
                <Text style={{color: '#828282'}}>Month</Text>
              </View>
              <View style={{flex: 2}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value="2020"
                />
                <Text style={{color: '#828282'}}>Year</Text>
              </View>
            </View>
          </View>

          <View style={componentStyle.pickupOptions}>
            <View style={componentStyle.pickupOption}>
              <Text style={componentStyle.pickupOptionLabel}>
                Picked up at home
              </Text>
              <Switch
                trackColor={{false: '#E0E0E0', true: '#E0E0E0'}}
                thumbColor={homeOption ? '#FF6E6E' : '#828282'}
                onValueChange={() => setHomeOption(!homeOption)}
                value={homeOption}
              />
            </View>
            <View style={componentStyle.pickupOption}>
              <Text style={componentStyle.pickupOptionLabel}>
                Picked up at a specific address
              </Text>
              <Switch
                trackColor={{false: '#E0E0E0', true: '#E0E0E0'}}
                thumbColor={addressOption ? '#FF6E6E' : '#828282'}
                onValueChange={() => setAddressOption(!addressOption)}
                value={addressOption}
              />
            </View>
          </View>
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

const componentStyle = StyleSheet.create({
  textInput: {
    borderColor: '#BDBDBD',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 24,
    color: '#333333',
    fontWeight: '600',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickupOptions: {marginTop: 50},
  pickupOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  pickupOptionLabel: {fontSize: 18, fontWeight: '500', color: '#4F4F4F'},
});

export default SetSchedule;
