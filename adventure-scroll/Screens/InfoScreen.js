import * as React from 'react';
import tw from 'tailwind-react-native-classnames';
import { NavigationContainer } from '@react-navigation/native';
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
import 'react-native-gesture-handler';

const Test = () => {
  return (
    
    <View style = {tw `bg-gray-200`}>
    <TouchableOpacity><Ionicons
              name="filter"
              size={32}
              color="#585F88"
              style={tw``}
            />
            </TouchableOpacity>
      <Text style = {styles.test}>Created by Ethan Jagoda</Text>
      <Text>This is a description of the app and its uses</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({

 test: {
   backgroundColor: "#333366"
 }
});
