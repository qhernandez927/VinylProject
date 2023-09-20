import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import {StyleSheet} from 'react-native';

const TestWebView = () => {
  const [uri, setUri] = useState();
  const googleTest = 'https://www.google.com/';
  useEffect(() => {
    fetch('http://localhost:3000/spotify', {})
      .then(data => {
        setUri(data.url);
      })
      .catch(error => console.log(error));
  }, []);

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
