import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {phonecall, email, web} from 'react-native-communications';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconMaC from 'react-native-vector-icons/MaterialCommunityIcons';

const IletisimScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView style={{flex: 1, backgroundColor: '#1a7ed3'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('IletisimFormuScreen')}
          style={{
            marginTop: 70,
            height: 90,
            flexDirection: 'row',
            backgroundColor: '#0070d4',
            alignItems: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#fff',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
             
              backgroundColor: '#1a7ed3',
              borderRadius: 30,
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconMa name="edit" size={32} color="white" />
          </View>
          <View
            style={{
              flex: 1,
              margin: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>
              Öneri ve Şikayetlerinizi Yazabilirsiniz
            </Text>
          </View>

          <View
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconMa name="arrow-forward-ios" size={32} color="#f2e600" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => phonecall('05426199249',true)}
          style={{
            marginTop: 20,
            height: 80,
            flexDirection: 'row',
            backgroundColor: '#0070d4',
            alignItems: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#fff',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
             
              backgroundColor: '#1a7ed3',
              borderRadius: 30,
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconMa name="phone" size={32} color="white" />
          </View>
          <View
            style={{
              flex: 1,
              margin: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>
              +90 542 619 9249
            </Text>
          </View>

          <View
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconMa name="arrow-forward-ios" size={32} color="#f2e600" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => email(['info@vbb.bel.tr'],null,null,null,null)}
          style={{
          
            height: 80,
            flexDirection: 'row',
            backgroundColor: '#0070d4',
            alignItems: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#fff',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
            
              backgroundColor: '#1a7ed3',
              borderRadius: 30,
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconMa name="alternate-email" size={32} color="white" />
          </View>
          <View
            style={{
              flex: 1,
              margin: 10,
            }}>
            <Text style={{color: 'white', fontSize: 24}}>
            info@vbb.bel.tr
            </Text>
          </View>

          <View
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconMa name="arrow-forward-ios" size={32} color="#f2e600" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => web('https://van.bel.tr/')}
          style={{
            marginTop: 20,
            height: 80,
            flexDirection: 'row',
            backgroundColor: '#0070d4',
            alignItems: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#fff',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
             
              backgroundColor: '#1a7ed3',
              borderRadius: 30,
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconMa name="web" size={32} color="white" />
          </View>
          <View
            style={{
              flex: 1,
              margin: 10,
            }}>
            <Text style={{color: 'white', fontSize: 22}}>
            https://van.bel.tr/
            </Text>
          </View>

          <View
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconMa name="arrow-forward-ios" size={32} color="#f2e600" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IletisimScreen;
