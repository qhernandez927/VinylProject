import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Workout from './Workout';

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
          if (route.name === 'Workout') {
            return (
              <MaterialCommunityIcon
                name="weight-lifter"
                size={40}
                color={color}
              />
            );
          }
          if (route.name === 'Tickets') {
            return <EntypoIcon name="ticket" size={size} color={color} />;
          }
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: '#262626',
          height: '10%',
          shadowRadius: 0,
          shadowOffset: {height: 0},
        },
        headerTitle: 'Work Out',
        tabBarStyle: {
          backgroundColor: '#262626',
          height: '10%',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#818CF8',
        tabBarInactiveTintColor: '#4338CA',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Workout" component={Workout} />
    </Tab.Navigator>
  );
};

export default Home;
