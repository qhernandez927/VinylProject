import {View, Text, Linking, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import {StyleSheet} from 'react-native';

const TestWebView = ({navigation}) => {
  const [uri, setUri] = useState();

  useEffect(() => {
    const navigate = url => {
      console.log('when do we get here nav function');
      const route = url.replace(/.*?:\/\//g, '');
      const id = route.match(/\/([^\/]+)\/?$/)[1];
      const routeName = route.split('/')[0];

      if (routeName === 'workout') {
        navigation.navigate('Workout');
      }
    };
    const handleOpenURL = event => {
      console.log(event.url, 'is this null');
      navigate(event.url);
    };
    Linking.addEventListener('url', handleOpenURL);
    const fetchSpotifyAuth = () => {
      fetch('http://localhost:3000/spotify', {})
        .then(data => {
          setUri(data.url);
        })
        .catch(error => console.log(error));
    };
    fetchSpotifyAuth();
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        source={{uri: uri}}
        style={styles.spotifyWebView}
      />
    </View>
  );
};

export default TestWebView;

const styles = StyleSheet.create({
  spotifyWebView: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderColor: 'blue',
  },
});
