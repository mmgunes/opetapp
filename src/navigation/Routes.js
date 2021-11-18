import React from 'react';
import {View, Text} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
REACT NATİVE NAVİGATİON

1-npm install @react-navigation/native --save  //Eğer save çalışmazsa --force yaz

2-npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save

3-npm install @react-navigation/drawer --save

4-npm install @react-navigation/stack --save



Bunları import et

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

Değişken Tanımla

const Stack = createStackNavigator(); //Navigationları Stack değişkenimizle çağıracağız

Başlangıç Route belirle

initialRouteName="..." ile Örn
 
return(içine yaz)
<NavigationContainer> 
      <Stack.Navigator initialRouteName="HomeScreen">


<Stack.Screen //İlk Ekran
          name="Home"
          component={HomeScreen} //Çağıracağı Prop */
