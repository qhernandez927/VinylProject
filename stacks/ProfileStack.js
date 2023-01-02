import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../components/Profile';
import React from 'react';

const ProfileStackScreen = () => {
  const ProfileStack = createNativeStackNavigator();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreen;
