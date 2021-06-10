
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import SignupLoginScreen from './Screens/SignupLoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <AppContainer></AppContainer>
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen: SignupLoginScreen},
 
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
