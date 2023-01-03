import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../components/Profile';
import React from 'react';

const ProfileStackScreen = () => {
  const ProfileStack = createNativeStackNavigator();

  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTitle: '',
        headerTransparent: true,
        headerStyle: {backgroundColor: 'transparent'},
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreen;
