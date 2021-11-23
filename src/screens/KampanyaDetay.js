import React from 'react';
import {View, Text, Image} from 'react-native';

export default function KampanyaDetayScreen({route}) {
  const item = route.params;

  return (
    <View
      style={{
        width: '90%',
        alignItems: 'center',
      }}>
      <Image
        style={{resizeMode: 'stretch', width: '100%', height: 240}}
        source={{uri: item.image}}
      />
      <Text style={{fontSize: 28}}>{item.title}</Text>
      <Text style={{fontSize: 18}}>{item.detail}</Text>
    </View>
  );
}
