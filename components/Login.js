import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUserIn = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert(
            'This Email is already in use',
            'Please choose a different email',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          );
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Email is invalid', '', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
        console.error(error);
      });
  };

  // should be saved for when user is signed in and is on diff screen
  // Leaving here for now

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        onChangeText={userEmail => setEmail(userEmail)}
        defaultValue={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => signUserIn(email, password)}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.signInText}>
        {'New User? '}
        <Text
          style={styles.signInClickText}
          // On press should link to new View to create new account
          onPress={() => navigation.navigate('NewUser')}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signInClickText: {
    color: '#EAB84E',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  signInText: {
    marginTop: 10,
    color: 'white',
    fontSize: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 73,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 300,
  },
  container: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  textInput: {
    fontSize: 25,
    paddingLeft: 10,
    borderRadius: 4,
    borderWidth: 1,
    width: 300,
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login;
