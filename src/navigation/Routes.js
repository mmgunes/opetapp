import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconMaC from 'react-native-vector-icons/MaterialCommunityIcons';

const logo = {uri: 'https://van.bel.tr/assets/img/logo.png'};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <TouchableOpacity style={{marginRight:10}} onPress={() =>toggleDrawer()} >
      <IconMa name="menu" size={28} color="#fff" />
    </TouchableOpacity>
  )
}

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',//Fonksiyon Image componentini çalıştıracak
          headerRight: () => (
            <  NavigationDrawerStructure navigationProps={navigation} />
          ),
         headerLeft: () => (
            <Image
              style={{width: 70, height: 24, marginLeft: 10}}
              source={logo}
            />
          ), 
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

const KampanyaScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Kampanya">
      <Stack.Screen
        name="Kampanya"
        component={KampanyaScreen}
        options={{
          title: 'Kampanyalar',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                style={{width: 70, height: 24, marginLeft: 10}}
                source={logo}
              />
            </TouchableOpacity>
          ), //Fonksiyon Image componentini çalıştıracak
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#0271cd',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#0271cd',
      }}
      //screenOptions artık kullanılıyor drawerContentOptions yerine
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
        name="Home 2 Screen"
        component={HomeScreenStack}
        options={{
          drawerLabel: 'Ana Sayfa',
          drawerIcon: ({focused}) => (
            <IconMa name="home" size={24} color="red" />
          ),
        }}
      />
      <Drawer.Screen
        name="KampanyaScreen"
        component={HomeScreenStack}
        options={{
          drawerLabel: 'Kampanyalar',
          drawerIcon: ({focused}) => (
            <IconMa name="campaign" size={24} color="red" />
          ),
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
