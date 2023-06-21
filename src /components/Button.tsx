import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = (props:any) => {
  return (
    <View style={{}}>
   <TouchableOpacity
   style={{
    backgroundColor:'lightgray',
   borderRadius:10,
   borderWidth:1,
   height:35,
   width:100,
  borderColor:'lightgray',
  justifyContent: 'center',
  
  }}
   >
    <Text style={{
    textAlign:'center',
    fontWeight:'bold',
    color:'#000000',
    fontSize:16
    }}>{props.text}</Text>
   </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})