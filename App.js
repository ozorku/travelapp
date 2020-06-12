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
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Homescreen from './screens/Home';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Splash"
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
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Compass" component={Compass} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Calendar = () => {
  return <Text>Calendar</Text>;
};
const Compass = () => {
  return <Text>Compass</Text>;
};
const Notification = () => {
  return <Text>Notification</Text>;
};

export default App;
