import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NextPageNav = ({navigation, iconName, text, navigateTo}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigateTo)}
      style={{
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#EB5757',
        width: '100%',
        paddingBottom: 30,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 18}}>{text}</Text>
      <AntDesign
        name={iconName}
        size={18}
        color="white"
        style={{marginLeft: 15}}
      />
    </TouchableOpacity>
  );
};

export default NextPageNav;
