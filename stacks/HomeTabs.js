import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileStackScreen from './ProfileStack';
import WorkoutStackScreen from './WorkoutStackScreen';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'WorkoutStackScreen') {
            return (
              <MaterialCommunityIcon
                name="weight-lifter"
                size={40}
                color={color}
              />
            );
          }
          if (route.name === 'ProfileStackScreen') {
            return (
              <FontAwesomeIcon name="user-circle-o" size={30} color={color} />
            );
          }
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: '#262626',
          height: '10%',
          shadowRadius: 0,
          shadowOffset: {height: 0},
        },
        tabBarStyle: {
          backgroundColor: '#262626',
          height: '10%',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#4338CA',
        tabBarInactiveTintColor: '#818CF8',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="WorkoutStackScreen" component={WorkoutStackScreen} />
      <Tab.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};
export default HomeTabs;
