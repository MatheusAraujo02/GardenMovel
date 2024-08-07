import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation';
// import Home from './src/home';


export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});