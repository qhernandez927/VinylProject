import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Routine from '../components/Routine';
import Workout from '../components/Workout';

const WorkoutStackScreen = () => {
  const WorkoutStack = createNativeStackNavigator();

  return (
    <WorkoutStack.Navigator
      initialRouteName="Workout"
      screenOptions={{
        headerTitle: '',
        headerTransparent: true,
        headerStyle: {backgroundColor: 'transparent'},
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }}>
      <WorkoutStack.Screen name="Workout" component={Workout} />
      <WorkoutStack.Screen name="Routine" component={Routine} />
    </WorkoutStack.Navigator>
  );
};

export default WorkoutStackScreen;
