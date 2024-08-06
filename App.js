import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import appNavigation from '.navigation';
import Home from './src/home';


export default function App() {
  return (
    <View style={styles.container}>
      <Home> </Home> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgreen',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});