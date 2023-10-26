import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import auth from '@react-native-firebase/auth';
import WebView from 'react-native-webview';

const Workout = ({navigation}) => {
  const tw = useTailwind();

  const logOff = () => {
    // TODO: check if user is logged in
    auth()
      .signOut()
      .then(() => console.log('Youre Signed out'));
  };
  return (
    <View style={tw('pt-20 items-center bg-neutral-900 h-full ')}>
      <View style={tw('bg-indigo-200 px-3 py-1 rounded-full')}>
        <TouchableOpacity onPress={() => navigation.navigate('Routine')}>
          <Text style={tw('text-indigo-800 font-semibold')}>Routine</Text>
        </TouchableOpacity>
      </View>
      <View style={tw('bg-indigo-200 px-3 py-1 rounded-full')}>
        <TouchableOpacity onPress={logOff}>
          <Text style={tw('text-indigo-800 font-semibold')}>Temp Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={tw('bg-indigo-200 px-3 py-1 rounded-full')}>
        <TouchableOpacity onPress={() => navigation.navigate('TestWebView')}>
          <Text style={tw('text-indigo-800 font-semibold')}>Spotify login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({
  spotifyWebView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
