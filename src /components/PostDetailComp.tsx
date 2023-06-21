import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PostDetailComp = (props: any) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color:'#000000',fontSize:20,fontWeight:'bold'}}>{props.value}</Text>
      <Text style={{color:'gray',fontSize:16,fontWeight:'600'}}>{props.tittle}</Text>
    </View>
  );
};

export default PostDetailComp;

const styles = StyleSheet.create({});
