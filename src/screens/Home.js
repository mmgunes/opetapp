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
import {deviceHeight,deviceWidth} from '../utils/Dimensions'


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
            <Text>asdlja{deviceHeight}45564{deviceWidth}  aşskld</Text>
          <Image
            style={{
             
              resizeMode: 'cover',
              width: deviceWidth,
              height: deviceHeight / 2 -70,
            }}
            
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={{flex: 1, height: deviceHeight}}>
          <Text>Body</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
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
