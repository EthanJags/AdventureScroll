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
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import UploadImageButton from './UploadImageButton';
export const backgroundColor = '#282B3D';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const Activity = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const goToHome = (imageUri) => {
    navigation.navigate('HomeScreen', { imageUri });
  };

  const { activityTitle, activityDescription } = route.params;
  return (
    <View style={styles.normal}>
      <SafeAreaView contentInsetAdjustmentBehavior="never" style={tw`h-full`}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Ionicons name="arrow-back" size={32} style={styles.filter} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="information-circle-outline"
              size={32}
              color="#585F88"
              style={styles.settings}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <Text style={styles.activityTitle}>{activityTitle}</Text>
          <Text style={styles.activityDescription}>{activityDescription}</Text>
          <UploadImageButton />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  activityTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  activityDescription: {
    textAlign: 'center',
    color: 'white',
    padding: 20,
    fontSize: 18,
  },
  main: {
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normal: {
    backgroundColor: backgroundColor,
  },

  filter: {
    margin: 15,
    marginRight: 0,
    color: '#585F88',
  },
  settings: {
    margin: 15,
    marginLeft: 0,
  },
  topBar: {
    marginTop: 8,
    justifyContent: 'space-between',

    flexDirection: 'row',
  },
});
