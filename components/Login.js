import React from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useTailwind} from 'tailwind-rn';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const tw = useTailwind();

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
    <View className="flex items-center content-center justify-center bg-light-primary h-full">
      <Text style={styles.titleText}>SpinSpin</Text>
      <TextInput
        style={tw(
          'border-light-tertiary rounded-lg text-2xl border-2 pl-2 w-72 h-10 m-1 ',
        )}
        autoCapitalize="none"
        onChangeText={userEmail => setEmail(userEmail)}
        defaultValue={email}
        placeholder="Email"
        placeholderTextColor="#E2E8F0"
      />
      <TextInput
        style={tw(
          'border-indigo-700 rounded-lg text-2xl border-2 pl-2 w-72 h-10 m-1 ',
        )}
        autoCapitalize="none"
        placeholder="Password"
        placeholderTextColor="#E2E8F0"
        secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)}
      />
      <TouchableOpacity
        style={tw(
          'bg-light-secondary rounded-lg w-72 h-10 mt-3 text-slate-200',
        )}
        onPress={() => signUserIn(email, password)}>
        <Text style={tw('text-light-primary text-2xl text-center mt-1 ')}>
          Continue
        </Text>
      </TouchableOpacity>

      <Text style={tw('text-slate-200 text-2xl text-center mt-3')}>
        {'New User? '}
        <Text
          style={tw(
            'text-indigo-400 decoration-solid decoration-indigo-400 text-2xl',
          )}
          // On press should link to new View to create new account
          onPress={() => navigation.navigate('NewUser')}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Pacifico',
    fontWeight: 'bold',
    fontSize: 40,
  },
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
