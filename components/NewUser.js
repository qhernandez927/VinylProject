import {Props} from './Login';
import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useTailwind} from 'tailwind-rn';

const NewUser = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const tw = useTailwind();

  //TODO:
  // Figure out how to strore additional user info in firebase auth
  // This is in working order. Should navigate to new view before being able to succesfully sign in
  const createNewUser = (email, password) => {
    console.log('Do we get here?');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Welcome New User');
      })
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

  return (
    <View
      style={tw(
        'flex items-center content-center justify-center bg-neutral-900 h-full',
      )}>
      <TextInput
        style={tw(
          'border-indigo-700 rounded-lg text-2xl border-2 pl-2 w-72 h-10 m-1 ',
        )}
        autoCapitalize="none"
        placeholder="First Name"
        placeholderTextColor="#E2E8F0"
        onChangeText={userFirstName => setFirstName(userFirstName)}
      />
      <TextInput
        style={tw(
          'border-indigo-700 rounded-lg text-2xl border-2 pl-2 w-72 h-10 m-1',
        )}
        autoCapitalize="none"
        placeholder="Last Name"
        placeholderTextColor="#E2E8F0"
        onChangeText={userLastName => setLastName(userLastName)}
      />
      <TextInput
        style={tw(
          'border-indigo-700 rounded-lg text-2xl border-2 pl-2 w-72 h-10 m-1',
        )}
        autoCapitalize="none"
        onChangeText={userEmail => setEmail(userEmail)}
        defaultValue={email}
        placeholder="Email"
        placeholderTextColor="#E2E8F0"
      />
      <TextInput
        style={tw(
          'border-indigo-700 rounded-lg text-2xl border-2 pl-2 w-72 h-10 m-1',
        )}
        autoCapitalize="none"
        placeholder="Password"
        placeholderTextColor="#E2E8F0"
        secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)}
      />

      <TouchableOpacity
        style={tw('bg-indigo-400 rounded-lg w-72 h-10 mt-3')}
        onPress={() => createNewUser(email, password)}>
        <Text style={tw('text-slate-200 text-2xl text-center mt-1')}>
          Start Lifting!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewUser;
