import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import auth from '@react-native-firebase/auth';

const Home = () => {
  const tw = useTailwind();

  const logOff = () => {
    // TODO: check if user is logged in
    auth()
      .signOut()
      .then(() => console.log('Youre Signed out'));
  };

  return (
    <View style={tw('pt-11 items-center')}>
      <TouchableOpacity onPress={logOff}>
        <Text>Temp Log Out</Text>
      </TouchableOpacity>
      <View style={tw('bg-blue-200 px-3 py-1 rounded-full')}>
        <Text style={tw('text-blue-800 font-semibold')}>Hello Tailwind</Text>
      </View>
    </View>
  );
};

export default Home;
