import * as React from 'react';
import { Provider } from 'react-redux';
import Home from './Screens/Home';
import Activity from './Screens/Activity';
import tw from 'tailwind-react-native-classnames';
import ActivityAlpha from './Screens/ActivityAlpha';
import ActivitySky from './Screens/ActivitySky';
import HomePapImage from './Screens/HomePapImage';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  AppRegistry,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

// You can import from local files
// or any pure javascript modules available in npm
export const backgroundColor = '#282B3D';
export const compCrazyColor = '#F4BDBD';
export const dynamicDuoColor = '#BDD6F4';
export const soloAdventureColor = '#BDF4C9';
let ScreenHeight = Dimensions.get('window').height;

export const arrayActivityTitles = ['Reverse Paparazzi', 'Alphabet Attack'];
export const arrayActivityDescription = [
  'this is the description for reverse paparrazi',
  'this is the description for Alphabet Attack',
];

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ActivityScreen"
            component={Activity}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ActivityAlphaScreen"
            component={ActivityAlpha}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ActivitySkyScreen"
            component={ActivitySky}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HomePapImage"
            component={HomePapImage}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
