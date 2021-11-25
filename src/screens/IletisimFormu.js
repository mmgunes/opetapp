import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {useState} from 'react';

import {CheckBox} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import RNSmtpMailer from 'react-native-smtp-mailer';
import ModalDropdown from 'react-native-modal-dropdown';

const IletisimFormuScreen = () => {
  const [adi, setAdi] = useState('');
  const [adiValid, setAdiValid] = useState(false);
  const [adiValidMesaj, setAdiValidMesaj] = useState('Boş Geçilemez');

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailValidMesaj, setEmailValidMesaj] = useState('Boş Geçilemez');

  const [telefon, setTelefon] = useState('');
  const [telefonValid, setTelefonValid] = useState(false);
  const [telefonValidMesaj, setTelefonValidMesaj] = useState('Boş Geçilemez');

  const [konu, setKonu] = useState('');
  const [konuValid, setKonuValid] = useState(false);
  const [konuValidMesaj, setKonuValidMesaj] = useState('Boş Geçilemez');

  const [mesaj, setMesaj] = useState('');
  const [mesajValid, setMesajValid] = useState(false);
  const [mesajValidMesaj, setMesajValidMesaj] = useState('Boş Geçilemez');

  const [sozlesme, setSozlesme] = useState(false);

  const checkAdi = text => {
    setAdi(text);
    if (text.length > 0) {
      setAdiValid(true);
    } else {
      setAdiValid(false);
    }
  };

  const checkEmail = text => {
    setEmail(text);
    if (text.length > 0) {
      const reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (reg.test(String(text).toLowerCase())) {
        setEmailValid(true);
      } else {
        setEmailValidMesaj('Geçerli bir email adresi giriniz');
        setEmailValid(false);
      }
    } else {
      setEmailValid(false);
      setEmailValidMesaj('Boş Geçilemez');
    }
  };

  const checkTelefon = text => {
    setTelefon(text);
    if (text.length > 0) {
      if (text.length == 10) {
        setTelefonValid(true);
      } else {
        setTelefonValidMesaj(
          'Telefon numaranızı 10 hane olacak şekilde yazınız',
        );
        setTelefonValid(false);
      }
    } else {
      setTelefonValid(false);
      setTelefonValidMesaj('Boş Geçilemez !');
    }
  };

  const checkKonu = value => {
    setKonu(value);
    if (value.length > 0) {
      setKonuValid(true);
    } else {
      setKonuValid(false);
      // setKonuValidMesaj('Boş Geçilemez');
    }
  };

  const checkMesaj = text => {
    setMesaj(text);
    if (text.length > 0) {
      setMesajValid(true);
    } else {
      setMesajValid(false);
    }
  };

  const mailGonder = async () => {
    await RNSmtpMailer.sendMail({
      mailhost: 'smtp.yandex.com.tr',
      port: '465',
      ssl: true,
      username: 'tes@odeks.org',
      password: '123456A+',
      fromName: 'Muhammed Güneş',
      replyTo: 'info@codeks.org',
      bcc: [email],
      subject: 'Van Belediyesi',
      htmlBody: '<h1> Merhaba VAN BB | </h1><p>Mesaj</p>',
      /*     
      attachmentPaths:[
        RNFS.ExternalDirectoryPath + "/image.jpg",
        RNFS.DocumentDirectoryPath + "/test.txt",
        RNFS.DocumentDirectoryPath + "/test2.csv",
        RNFS.DocumentDirectoryPath+ "/pdffile.pdf",
        RNFS.DocumentDirectoryPath + "/zipfile.zip",
        RNFS.DocumentDirectoryPath+ "/image.png",
      ],
      attachmentNames:[
        'image.jpg',
        'firstFile.txt',
        'secondFile.txt',
        'pdfFile.pdf',
        'zipExample.zip',
        'pngImage.png'
      ],
      */

    })

      .then(success => alert(success))
      .catch(err => alert(err));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#dddddd'}}>
      <ScrollView style={{flex: 1}}>
        <View style={{margin: 20}}>
          <TextInput
            value={adi}
            onChangeText={text => checkAdi(text)}
            style={{
              backgroundColor: '#fff',
              borderRadius: 30,
              paddingLeft: 20,
              marginBottom: 10,
              height: 60,
            }}
            placeholder="Adınız ve Soyadınız *"
            fontSize={18}
            secureTextEntry={false}
          />
          {adiValid == false ? (
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <Text style={{color: 'red', fontSize: 12}}>
                adMsj {adiValidMesaj}
              </Text>
            </View>
          ) : (
            <></>
          )}

          <TextInput
            value={email}
            onChangeText={text => checkEmail(text)}
            style={{
              backgroundColor: '#fff',
              borderRadius: 30,
              paddingLeft: 20,
              marginBottom: 10,
              height: 60,
            }}
            placeholder="Email Adresiniz *"
            fontSize={18}
            keyboardType="email-address"
          />
          {emailValid == false ? (
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <Text style={{color: 'red', fontSize: 12}}>
                mail {emailValidMesaj}
              </Text>
            </View>
          ) : (
            <></>
          )}

          <TextInput
            value={telefon}
            onChangeText={text => checkTelefon(text)}
            style={{
              backgroundColor: '#fff',
              borderRadius: 30,
              paddingLeft: 20,
              marginBottom: 10,
              height: 60,
            }}
            placeholder="Telefon Numaranız *"
            fontSize={18}
            keyboardType="phone-pad"
          />
          {telefonValid == false ? (
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <Text style={{color: 'red', fontSize: 12}}>
                tel {telefonValidMesaj}
              </Text>
            </View>
          ) : (
            <></>
          )}
          
              {/* <ModalDropdown options={['Öneri', 'Şikayet']}/> */}
              
          {/* <DropDownPicker
            items={[
              {
                label: 'İstek',
                value: 'Istek',
                hidden: true,
              },
              {
                label: 'Şikayet',
                value: 'Sikayet',
              },
              {
                label: 'Öneri',
                value: 'Oneri',
              },
              {
                label: 'Teşekkür',
                value: 'Tesekkur',
              },
            ]}
            placeholder="Konu Seçiniz *"
            defaultValue={konu}
            containerStyle={{height: 60}}
            style={{backgroundColor: '#fff', marginBottom: 10}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => checkKonu(item.value)}
          />
          {konuValid == false ? (
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <Text style={{color: 'red', fontSize: 12}}>
                konu {konuValidMesaj}
              </Text>
            </View>
          ) : (
            <></>
          )} */}

          <TextInput
            value={mesaj}
            onChangeText={text => checkMesaj(text)}
            style={{
              textAlignVertical: 'top',
              backgroundColor: '#fff',
              borderRadius: 30,
              paddingLeft: 20,
              marginBottom: 10,
              height: 160,
            }}
            placeholder="Mesajınız"
            fontSize={18}
            multiline={true}
            numberOfLines={4}
          />
          {mesajValid == false ? (
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <Text style={{color: 'red', fontSize: 12}}>
                mesaj {mesajValidMesaj}
              </Text>
            </View>
          ) : (
            <></>
          )}
          <CheckBox
            onPress={() => setSozlesme(!sozlesme)}
            title="Yukaridaki bilgilerin doğruluğunu onaylıyorum"
            checked={sozlesme}
          />
          <TouchableOpacity
            onPress={() => mailGonder()}
            disabled={
              sozlesme &&
              adiValid &&
              emailValid &&
              telefonValid &&
            //  konuValid &&
              mesajValid
                ? false
                : true
            }
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                sozlesme &&
                adiValid &&
                emailValid &&
                telefonValid &&
              //  konuValid &&
                mesajValid
                  ? '#0070d4'
                  : '#888',
              borderRadius: 30,
              paddingLeft: 20,
              marginVertical: 10,
              height: 60,
            }}>
            <Text style={{color: '#fff', fontSize: 24}}>Gönder</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IletisimFormuScreen;
