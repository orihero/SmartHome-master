import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomePage from '../HomePage';


export default function LoginScreen() {
  const navigation = useNavigation(); 
  const onLogin = ()=>{
      navigation.navigate("HomePage")
  }
  return (
    <ImageBackground
      source={require('../../assets/images/scaled1.png')}
      style={styles.backImage}>
      <View style={styles.logoContainer}>
        <View>
          <Image
            source={require('../../assets/images/LOGO.png')}
            style={styles.logoImage}
          />
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
            Smart Home
          </Text>
        </View>
      </View>
      <View style={{flex: 0.6}}>
        <View>
          <TextInput style={styles.useInput} placeholder="Username" />
          <TextInput style={styles.useInput} placeholder="Password" />
        </View>
        <TouchableOpacity activeOpacity={0.4} onPress={onLogin}>
          <View style={styles.buttonContainer}>
            <Text style={{color: 'white'}}>Enter Your House</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.buttonContainer2}>
          <Text style={{color: 'white'}}>New Resident</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1,
            marginVertical: 10,
          }}>
          <Text style={{color: 'white'}}>Forgot password?</Text>
          <Text
            style={{
              color: 'white',
              marginLeft: 10,
              textDecorationLine: 'underline',
            }}>
            Click here
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

let {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  backImage: {
    width,
    flex: 1,
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 0.4,
    alignItems: 'center',
  },
  useInput: {
    borderBottomWidth: 2,
    marginHorizontal: 30,
    borderColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FF9900',
    marginHorizontal: 43,
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 40,
  },
  buttonContainer2: {
    backgroundColor: '#2A2A37',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 43,
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 30,
  },
});
