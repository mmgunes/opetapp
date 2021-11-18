import React from 'react';
import {View, Text} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen  from '../screens/Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <View>
        <Text>
            Opet App Routes
        </Text>
    </View>
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
import {createDrawerNavigator} from '@react-navigation/drawer'

Değişken Tanımla

const Stack = createStackNavigator(); //Navigationları Stack değişkenimizle çağıracağız
const Drawer = createDrawerNavigator();


Başlangıç Route belirle

initialRouteName="..." ile Örn
 
return(içine yaz)
<NavigationContainer> 
      <Stack.Navigator initialRouteName="HomeScreen">


<Stack.Screen //İlk Ekran
          name="Home"
          component={HomeScreen} //Çağıracağı Prop */
