import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Rating = () => {
  return (
    <View style={styles.rating}>
      <FontAwesome
        style={{marginRight: 7}}
        name={'star'}
        size={14}
        color="#F2994A"
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
    width: 65,
  },
});

export default Rating;
