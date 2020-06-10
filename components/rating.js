import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Rating = () => {
  return (
    <View style={styles.rating}>
      <Image
        style={{marginRight: 10}}
        source={require('../assets/images/icons/ant-design_star-filled.png')}
      />
      <Text style={{color: '#F2994A'}}>4.5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    backgroundColor: 'rgba(242,153,74,0.24)',
    height: 28,
    paddingHorizontal: 10,
    borderRadius: 4,
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
});

export default Rating;
