import React from 'react';
import {View, Text} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconMaC from 'react-native-vector-icons/MaterialCommunityIcons';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{
          title:'',
          headerLeft: ()=> {} //Fonksiyon Image componentini çalıştıracak
          }} />
    </Stack.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#0271cd',
      }}
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#0271cd',
          borderBottomColor: '#fff',
          borderBottomWidth: 1,
        },
        itemStyle: {marginVertical: 5},
        labelStyle: {
          fontSize: 18,
        },
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreenStack}
        options={{
          drawerLabel: 'Ana Sayfa',
          drawerIcon: focused => {
            <IconMa name="home" size={24} color="#fff" />;
          },
        }}
      />

      <Drawer.Screen
        name="KampanyaScreen"
        component={HomeScreenStack}
        options={{
          drawerLabel: 'Kampanyalar',
          drawerIcon: focused => {
            <IconMa name="campaign" size={24} color="#fff" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
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
          component={HomeScreen} //Çağıracağı Prop 
          
ÖRNEK/*/
/*
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import FaktoriyelScren from '../screens/Faktoriyel';

const Stack = createStackNavigator(); 
const Drawer = createDrawerNavigator(); //Navigationları Drawer değişkenimizle çağıracağız
		  
		  const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, //Geri butonu gözükmesin
          }}></Stack.Screen>
		  
        <Stack.Screen
          name="Faktoriyel"
          component={FlexBoxScreen}
          options={{
            title: 'Faktoriyel Screen',
            headerStyle: {backgroundColor: 'blue'},
            headerTintColor: 'white',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        ...
		.<Stack.Screen/>..
		...
      </Stack.Navigator>
    </NavigationContainer>
  );
};*/

//*
