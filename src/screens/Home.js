import React from 'react';
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import IconMa from 'react-native-vector-icons/MaterialIcons';
import {deviceHeight, deviceWidth} from '../utils/Dimensions';

import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [
  {
    image:
      'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    desc: 'Title 1',
  },
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc: 'Title 22',
  },
  {
    image:
      'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    desc: 'Title 333',
  },
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc: 'Title 4444',
  },
];

const bgImage = {uri: 'https://van.bel.tr/dosya/slider/3.jpg'};
//const deviceWidth = Dimensions.get('window').width; //Ekranın genişlik değeri
//const deviceHeight = Dimensions.get('window').height;

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0271cd'}}>
      <View style={{flex: 1}}>
        {/* <Text  style={{color:'white', fontSize: 21}}>VAN BÜYÜKŞEHİR BELEDİYE {deviceWidth} Home Screen {deviceHeight}</Text> */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#e9bc18',
            // height: deviceHeight / 2,
          }}>
         
          <FlatListSlider
            data={images}
            height={deviceHeight/2}
            timer={2000}
            onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={{paddingHorizontal: 0}}
            indicatorContainerStyle={{position: 'absolute', bottom: 20}}
            indicatorActiveColor={'#e9bc18'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
          />
          {/* <Image
            style={{
              resizeMode: 'cover',
              width: deviceWidth,
              height: deviceHeight / 2 - 70,
            }}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          /> */}
        </View>
        <View style={{flex: 1, width: '100%', marginTop: 35}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: 'rgba(255, 255, 255,0.2)',
                borderBottomWidth:1,
                borderBottomColor: 'rgba(255, 255, 255,0.2)',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>En Yakın Opet</Text>
              <Text style={{color: 'white', fontSize: 24}}>4,7 Km</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255,0.2)',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: 'white', fontSize: 24}}>Akıllı Dolum</Text>
              <IconMa name="local-gas-station" color="white" size={48} />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: 'rgba(255, 255, 255,0.2)',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>Benzin</Text>
              <Text style={{color: 'white', fontSize: 24}}>9 TL</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>Ödeme Yap </Text>
              <IconMa name="payment" color="white" size={48} />
            </View>
          </View>
        </View>
        <View
          style={{
            // position: 'absolute',
            // bottom: 0,
            height: 60,
            //backgroundColor: '#e9bc18',
            borderTopWidth: 1,
            borderTopColor: 'rgba(255, 255, 255, 0.6)',
            width: '100%',
            padding: 10,

            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('KampanyaScreen')}>
            <View style={{flex: 1}}>
              <Text style={{color: '#fff', fontSize: 18}}>KAMPANYALAR</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <IconMa name="arrow-forward-ios" size={32} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
