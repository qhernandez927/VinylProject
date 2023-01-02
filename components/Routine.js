import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';
import React from 'react';

const Routine = () => {
  const [title, setTitle] = useState('');

  return (
    <View>
      <Text> Hello Routine</Text>
    </View>
  );
};

export default Routine;
