import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

export default function KampanyaScreen({navigation}) {
  const itemSeparatorComponent = () => {
    return (
      <View
        style={{
          width: '90%',
          alignItems: 'center',
          height: 5,
          backgroundColor: '#fff',
        }}
      />
    );
  };

  //Bir tane item ister
  const renderItem = ({item}) => {
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
        <Text style={{fontSize: 18}}>{item.subtitle}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('KampanyaDetayScreen', item)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            backgroundColor: '#0070d4',
            borderRadius: 25,
            width: '100%',
          }}>
          <Text style={{color: 'white', fontSize: 24}}>Kampanya Detay</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const kampanyaList = [
    {
      id: 1,
      title: 'Başlık - 1',
      subtitle: 'manşet - 1',
      detail: 'açıklama - 1',
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 2,
      title: 'Başlık - 2',
      subtitle: 'manşet - 2',
      detail: 'açıklama - 2',
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    },
    {
      id: 3,
      title: 'Başlık - 3',
      subtitle: 'manşet - 3',
      detail: 'açıklama - 3',
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 4,
      title: 'Başlık - 4',
      subtitle: 'manşet - 4',
      detail: 'açıklama - 4',
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
     
        <FlatList
          data={kampanyaList} //datayı nerden alacak
          ItemSeparatorComponent={itemSeparatorComponent} // Listenin arasındaki çizgi nasıl olsun görünümü
          renderItem={renderItem} // Nasıl göstereceği yani fonksiyon
          keyExtractor={(item, index) => index.toString()} //data dan gelen iten ve indexi alır
        />
   
    </SafeAreaView>
  );
}
