import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {useTailwind} from 'tailwind-rn';
import Home from './Home';
import Login from './components/Login';

import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {firebase} from '@react-native-firebase/auth';

const App = () => {
  const [user, setUser] = useState({loggedIn: false});

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser({loggedIn: true});
      } else {
        setUser({loggedIn: false});
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const tw = useTailwind();

  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView style={tw('h-full')} />
      <Login />
      <Home />
    </TailwindProvider>
  );
};

export default App;
