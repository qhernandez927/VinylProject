import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {useTailwind} from 'tailwind-rn';
import Home from './components/Home';
import Login from './components/Login';
import NewUser from './components/NewUser';

import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {firebase} from '@react-native-firebase/auth';
import HomeTabs from './stacks/HomeTabs.js';

const App = () => {
  const [appUser, setUser] = useState({loggedIn: false});
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser({loggedIn: true});
      } else {
        setUser({loggedIn: false});
        console.log(user);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitle: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
            headerBackVisible: true,
            headerBackTitleVisible: false,
          }}>
          {appUser.loggedIn ? (
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="NewUser" component={NewUser} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
