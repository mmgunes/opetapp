import React from 'react';
import {View, Text, Image} from 'react-native';
import { deviceHeight } from '../utils/Dimensions';

export default function KampanyaDetayScreen({route}) {
  const item = route.params;

  return (
    <View
      style={{
       width:'95%',
       margin:10,
        alignItems:'center'
      }}>
      <Image
        style={{resizeMode: 'cover', width: '100%', height: deviceHeight/3}}
        source={{uri: item.image}}
      />
      <Text style={{fontSize: 28}}>{item.title}</Text>
      <Text style={{fontSize: 18}}>{item.detail}</Text>
    </View>
  );
}
