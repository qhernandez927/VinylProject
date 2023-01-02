import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileStackScreen from './ProfileStack';
import WorkoutStackScreen from './WorkoutStackScreen';
import React from 'react';

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Workout" component={WorkoutStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};
export default HomeTabs;
