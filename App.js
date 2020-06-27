/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// screens
import HomeScreen from './screens/Home';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import DestinationDetailScreen from './screens/DestinationDetail';
import SetScheduleScreen from './screens/SetSchedule';
import ChooseTravelAgentScreen from './screens/ChooseTravelAgent';
import PaymentScreen from './screens/Payment';
import CheckoutScreen from './screens/Checkout';

const CalendarScreen = () => {
  return <Text>Calendar</Text>;
};
const CompassScreen = () => {
  return <Text>Compass</Text>;
};
const NotificationScreen = () => {
  return <Text>Notification</Text>;
};

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="DestinationDetail"
        component={DestinationDetailScreen}
      />
    </Tab.Navigator>
  );
}

function DestinationDetailTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="DestinationDetail"
        component={DestinationDetailScreen}
      />
    </Tab.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, name, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Calendar') {
            iconName = 'calendar';
          } else if (route.name === 'Compass') {
            iconName = 'compass';
          } else if (route.name === 'Notification') {
            iconName = 'bell';
          }

          // You can return any component that you like here!
          return (
            <View
              style={{
                backgroundColor: focused
                  ? 'rgba(255,110,110,0.24)'
                  : 'transparent',
                borderRadius: 12,
                paddingVertical: 10,
                paddingHorizontal: 30,
                flexDirection: 'row',
              }}>
              <FontAwesome name={iconName} size={20} color={color} />
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF6E6E',
        inactiveTintColor: '#aaa',
        showLabel: false,
        style: {
          borderTopWidth: 0,
          height: 100,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Compass" component={CompassScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen
          name="DestinationDetail"
          component={DestinationDetailScreen}
        />
        <Stack.Screen name="SetSchedule" component={SetScheduleScreen} />
        <Stack.Screen
          name="ChooseTravelAgent"
          component={ChooseTravelAgentScreen}
        />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
