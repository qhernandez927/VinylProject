import {Props} from './Login';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';

const NewUser = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="First Name"
        onChangeText={userFirstName => setFirstName(userFirstName)}
      />
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Last Name"
        onChangeText={userLastName => setLastName(userLastName)}
      />
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
        onPress={() => createNewUser(email, password)}>
        <Text style={styles.buttonText}>Join The Fest!</Text>
      </TouchableOpacity>
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
    flex: 0.4,
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

export default NewUser;
