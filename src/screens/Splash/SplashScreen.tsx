
import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>
       BookMyService
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: width * 0.08,
  },
  logo: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: 'contain',
  },
  title: {
    marginTop: height * 0.03,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#4B5563',
  },
});
