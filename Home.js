import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Exercises from './components/Exercises';

const Home = () => {
  const Tab = createBottomTabNavigator();

  const tw = useTailwind();

  const logOff = () => {
    // TODO: check if user is logged in
    auth()
      .signOut()
      .then(() => console.log('Youre Signed out'));
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Exercises') {
            return (
              <FontAwesomeIcon name="user-circle-o" size={size} color={color} />
            );
          }
          if (route.name === 'Tickets') {
            return <EntypoIcon name="ticket" size={size} color={color} />;
          }
          if (route.name === 'Bands') {
            return <EntypoIcon name="modern-mic" size={size} color={color} />;
          }
          if (route.name === 'My Line Up') {
            return (
              <MaterialCommunityIcon
                name="playlist-music"
                size={size}
                color={color}
              />
            );
          }
        },
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
        tabBarActiveTintColor: '#EAB84E',
        tabBarInactiveTintColor: 'white',
      })}>
      <Tab.Screen name="Exercises" component={Exercises} />
    </Tab.Navigator>
  );
};

export default Home;
