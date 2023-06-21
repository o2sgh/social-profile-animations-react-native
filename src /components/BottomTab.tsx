import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {tiktok, facebook, insta} from '../data';

const NavigationBarComponent = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 2,
          borderColor: '#FFFFFF',
          borderRadius: 55,
          height: 60,
          padding: 10,
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 25,
            padding: 7,
            justifyContent: 'center',
          }}>
          <Icon name="home" size={26} color={'#000000'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            borderRadius: 25,
            padding: 7,
          }}>
          <Icon name="message" size={26} color={'#000000'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 25,
            padding: 7,
            marginRight: 20,
          }}>
          <Icon name="squared-plus" size={26} color={'#000000'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 25,
            padding: 7,
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons
            name="checkbox-multiple-blank-circle"
            size={26}
            color={'#000000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,
            padding: 7,
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 30, height: 30, borderRadius: 30}}
            source={{uri: insta.profile}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
  },
});
export default NavigationBarComponent;
