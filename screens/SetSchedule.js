import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Switch,
} from 'react-native';
import {styles} from '../assets/styles/styles';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import ScreenTopNav from '../components/screenTopNav';
import NextPageNav from '../components/nextPageNav';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

let dateObj = {
  day: moment().format('DD'),
  month: moment().format('MMMM'),
  year: moment().format('YYYY'),
};

const SetSchedule = ({navigation}) => {
  // set initial date
  useEffect(() => {
    setStartDate(dateObj);
    setEndDate(dateObj);
  }, []);
  const [homeOption, setHomeOption] = useState(false); // home option
  const [addressOption, setAddressOption] = useState(false); // address option
  const [date, setDate] = useState(new Date()); // date selected date-picker
  const [showDatePicker, setShowDatePicker] = useState(false); // date picker
  const [typeSelected, setTypeSelected] = useState(''); // type selected start or end
  // startdate
  const [startDate, setStartDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  // end dtate
  const [endDate, setEndDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  function toggleShowDatePicker(type) {
    setShowDatePicker(!showDatePicker); // toggle to display/hide date picker
    setTypeSelected(type); // set type selected start/end
  }

  function pickDate() {
    let dateObject = {
      day: moment(date).format('DD'),
      month: moment(date).format('MMMM'),
      year: moment(date).format('YYYY'),
    };
    switch (typeSelected) {
      case 'start':
        setStartDate(dateObject);
        break;
      case 'end':
        setEndDate(dateObject);
    }
    toggleShowDatePicker('');
  }

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <View
        style={[
          componentStyle.datePicker,
          {display: showDatePicker ? 'flex' : 'none'},
        ]}>
        <DatePicker
          mode={'date'}
          date={date}
          onDateChange={setDate}
          locale="en"
        />
        <TouchableOpacity
          onPress={() => pickDate()}
          style={{
            backgroundColor: '#FF6E6E',
            paddingVertical: 15,
            paddingHorizontal: 30,
            marginTop: 50,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
            Pick {typeSelected} Date
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView>
        <View style={[styles.container]}>
          <ScreenTopNav
            navigation={navigation}
            showEllipse={true}
            title="Set the schedule"
          />

          <TouchableOpacity
            onPress={() => toggleShowDatePicker('start')}
            style={{marginTop: 50}}>
            <Text>Start</Text>
            <View style={componentStyle.dateContainer}>
              <View style={{flex: 1, marginRight: 30}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value={startDate.day}
                />
                <Text style={{color: '#828282'}}>Day</Text>
              </View>
              <View style={{flex: 2, marginRight: 30}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value={startDate.month}
                />
                <Text style={{color: '#828282'}}>Month</Text>
              </View>
              <View style={{flex: 2}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value={startDate.year}
                />
                <Text style={{color: '#828282'}}>Year</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FontAwesome
            name="exchange"
            size={24}
            style={{marginVertical: 25, textAlign: 'center'}}
          />
          <TouchableOpacity onPress={() => toggleShowDatePicker('end')}>
            <Text>End</Text>
            <View style={componentStyle.dateContainer}>
              <View style={{flex: 1, marginRight: 30}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value={endDate.day}
                />
                <Text style={{color: '#828282'}}>Day</Text>
              </View>
              <View style={{flex: 2, marginRight: 30}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value={endDate.month}
                />
                <Text style={{color: '#828282'}}>Month</Text>
              </View>
              <View style={{flex: 2}}>
                <TextInput
                  editable={false}
                  style={componentStyle.textInput}
                  value={endDate.year}
                />
                <Text style={{color: '#828282'}}>Year</Text>
              </View>
            </View>
          </TouchableOpacity>

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
  datePicker: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    left: 0,
    top: 0,
    zIndex: 3,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
