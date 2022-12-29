import React from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const Home = () => {
  const tw = useTailwind();

  return (
    <View style={tw('pt-11 items-center')}>
      <View style={tw('bg-blue-200 px-3 py-1 rounded-full')}>
        <Text style={tw('text-blue-800 font-semibold')}>Hello Tailwind</Text>
      </View>
    </View>
  );
};

export default Home;
