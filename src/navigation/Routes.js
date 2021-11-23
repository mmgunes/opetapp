import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';
import KampanyaScreen from '../screens/Kampanya';
import KampanyaDetayScreen from '../screens/KampanyaDetay'
import IletisimScreen from '../screens/Iletisim'

import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconMaC from 'react-native-vector-icons/MaterialCommunityIcons';

const logo = require('../img/logo.png');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <TouchableOpacity style={{marginRight: 10}} onPress={() => toggleDrawer()}>
      <IconMa name="menu" size={28} color="#fff" />
    </TouchableOpacity>
  );
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '', //Fonksiyon Image componentini çalıştıracak
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Image
              style={{width: 70, height: 33, marginLeft: 10}}
              source={logo}
            />
          </TouchableOpacity>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
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
    <Stack.Navigator initialRouteName="KampanyaScreen">
      <Stack.Screen
        name="KampanyaScreen"
        component={KampanyaScreen}
        options={{
          title: 'Kampanyalar',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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
const IletisimScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="IletisimScreen">
      <Stack.Screen
        name="IletisimScreen"
        component={IletisimScreen}
        options={{
          title: 'Bize Ulaşın',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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
        name="HomeScreen"
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
        component={KampanyaScreenStack} // component={KampanyaScreenStack}
        options={{
          drawerLabel: 'Kampanyalar',
          drawerIcon: ({focused}) => (
            <IconMa name="campaign" size={24} color="red" />
          ),
        }}
      />
      <Drawer.Screen
        name="İletişim Sayfamız"
        component={IletisimScreenStack} // component={IletisimScreenStack}
        options={{
          drawerLabel: 'İletişim',
          drawerIcon: ({focused}) => (
            <IconMa name="contacts" size={24} color="red" />
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
        <Stack.Screen
          name="KampanyaDetayScreen"
          component={KampanyaDetayScreen}
          options={{
            title: 'Kampanya Detay',
            headerStyle: {backgroundColor: '#0070d4'},
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
