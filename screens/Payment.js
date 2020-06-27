import React, {useEffect} from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {styles} from '../assets/styles/styles';
import ScreenTopNav from '../components/screenTopNav';
import NextPageNav from '../components/nextPageNav';

const Payment = ({navigation}) => {
  useEffect(() => {
    this.RBSheet.close(); // close modal
  }, []);
  return (
    <>
      <View style={{backgroundColor: '#ffffff'}}>
        <SafeAreaView>
          <View style={[styles.container]}>
            <ScreenTopNav
              navigation={navigation}
              showEllipse={true}
              title="Choose your payment"
            />
            <View style={componentStyle.atmCard}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: '100%',
                  position: 'relative',
                  top: -30,
                }}
                source={require('../assets/images/atm-card.png')}
              />
            </View>

            <View style={{position: 'relative', top: -50}}>
              <Text style={{marginBottom: 10, color: '#4F4F4F'}}>
                Card number
              </Text>
              <View style={componentStyle.textInput}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: 80,
                  }}
                  source={require('../assets/images/visa.png')}
                />
                <TextInput
                  value=""
                  placeholder="Enter your card number"
                  style={{width: '100%', marginLeft: 20}}
                />
              </View>

              <Text style={{marginBottom: 10, color: '#4F4F4F'}}>
                Card holder name
              </Text>
              <View style={componentStyle.textInput}>
                <TextInput
                  value=""
                  placeholder="Enter your card holder name"
                  style={{width: '100%', marginLeft: 20, paddingVertical: 10}}
                />
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 30, width: '30%'}}>
                  <Text style={{marginBottom: 10, color: '#4F4F4F'}}>
                    Expiry date
                  </Text>
                  <View style={componentStyle.textInput}>
                    <TextInput
                      value=""
                      placeholder="27/20"
                      style={{
                        width: '100%',
                        marginLeft: 20,
                        paddingVertical: 10,
                      }}
                    />
                  </View>
                </View>
                <View style={{width: '30%'}}>
                  <Text style={{marginBottom: 10, color: '#4F4F4F'}}>CVV</Text>
                  <View style={componentStyle.textInput}>
                    <TextInput
                      value=""
                      placeholder="CVV"
                      style={{
                        width: '100%',
                        marginLeft: 20,
                        paddingVertical: 10,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <NextPageNav
          navigateTo="Checkout"
          navigation={navigation}
          text="Checkout"
          iconName="arrowright"
        />
      </View>
    </>
  );
};

const componentStyle = StyleSheet.create({
  atmCard: {
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.46,
    elevation: 9,
  },

  textInput: {
    borderRadius: 10,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
  },
});

export default Payment;
