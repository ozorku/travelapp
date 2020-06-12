import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ScreenTopNav = ({navigation, showEllipse, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name={'arrowleft'} size={25} />
      </TouchableOpacity>
      {title ? <Text style={{fontSize: 18}}>{title}</Text> : <Text></Text>}
      {showEllipse ? <AntDesign name={'ellipsis1'} size={30} /> : <Text></Text>}
    </View>
  );
};

export default ScreenTopNav;
