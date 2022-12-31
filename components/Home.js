import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Exercises from './Exercises';

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
              <MaterialCommunityIcon
                name="weight-lifter"
                size={size}
                color={color}
              />
            );
          }
          if (route.name === 'Tickets') {
            return <EntypoIcon name="ticket" size={size} color={color} />;
          }
        },
        headerShown: false,
        tabBarStyle: {backgroundColor: '#171717'},
        tabBarActiveTintColor: '#4338CA',
        tabBarInactiveTintColor: '#818CF8',
      })}>
      <Tab.Screen name="Exercises" component={Exercises} />
    </Tab.Navigator>
  );
};

export default Home;
