import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

const Routine = () => {
  const [title, setTitle] = useState('');
  const tw = useTailwind();

  return (
    <View
      style={tw(
        'flex items-center content-center justify-center bg-neutral-900 h-full',
      )}>
      <TextInput
        style={tw(
          'border-b-2 border-indigo-700 rounded-lg text-2xl pl-2 w-72 h-10 m-1 ',
        )}
        autoCapitalize="none"
        onChangeText={userEmail => setTitle(userEmail)}
        defaultValue={title}
        placeholder="Routine Title"
        placeholderTextColor="#E2E8F0"
      />

      <TouchableOpacity
        style={tw('bg-indigo-400 rounded-lg w-72 h-10 mt-3 text-slate-200')}>
        <Text style={tw('text-slate-200 text-2xl text-center mt-1 ')}>
          Add Exercise
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Routine;
