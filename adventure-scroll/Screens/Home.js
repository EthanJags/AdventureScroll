import { useState, useEffect } from 'react';
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
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export const backgroundColor = '#282B3D';
export const compCrazyColor = '#F4BDBD';
export const dynamicDuoColor = '#BDD6F4';
export const soloAdventureColor = '#BDF4C9';
let ScreenHeight = Dimensions.get('window').height;

const Home = () => {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const goToActivity = (title, desc) => {
    navigation.navigate('ActivityScreen', {
      activityTitle: title,
      activityDescription: desc,
    });
  };

  return (
    <View style={styles.normal}>
      <SafeAreaView contentInsetAdjustmentBehavior="never">
        <View style={styles.topBar}>
          <AntDesign name="filter" style={styles.filter} />

          <Text style={styles.title}>The Adventure Scroll</Text>
        </View>

        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.categoryTitle}>Competition Craziness</Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ActivityScreen', {
                  activityTitle: 'Reverse Paparazzi',
                  activityDescription: 'description',
                })
              }
              style={styles.compCrazyButton}>
              {image ? <Image src={{ uri: image }} /> : null}
              <Text style={styles.buttonText}>Reverse Paparazzi</Text>
              <Text style={styles.emojiButtonText}>
                {'\u2728'}
                {'\u2600'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ActivityScreen')}
              style={styles.compCrazyButton}>
              <Text style={styles.buttonText}>Alphabet Attack</Text>
              <Text style={styles.emojiButtonText}>
                {'\u2728'}
                {'\u2600'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ActivitySkyScreen')}
              style={styles.compCrazyButton}>
              <Text style={styles.buttonText}>Skyscraper Flight</Text>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.categoryTitle}>Dynamic Duos</Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.dynamicDuosButton}>
              <Text style={styles.buttonText}>Snowless Sledding</Text>
              <Text style={styles.emojiButtonText}>
                {'\u2728'}
                {'\u2600'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dynamicDuosButton}>
              <Text
                onPress={() => navigation.navigate('ActivityChaosScreen')}
                style={styles.buttonText}>
                Construction Chaos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dynamicDuosButton}>
              <Text style={styles.buttonText}>Your Mona Lisa</Text>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.categoryTitle}>Solo Adventures</Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.soloAdventureButton}>
              <Text style={styles.buttonText}>Three Musketeers</Text>
              <Text style={styles.emojiButtonText}>
                {'\u2728'}
                {'\u2600'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.soloAdventureButton}>
              <Text style={styles.buttonText}>Counting Coppers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.soloAdventureButton}>
              <Text style={styles.buttonText}>Wild Card</Text>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  normal: {
    backgroundColor: backgroundColor,
  },

  filter: {
    margin: 15,
    marginRight: 0,
    color: 'white',
  },
  settings: {
    margin: 15,
    marginLeft: 0,
  },
  topBar: {
    marginTop: 8,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  compCrazyButton: {
    padding: 10,
    margin: 10,
    width: 150,
    height: 200,
    backgroundColor: compCrazyColor,
    justifyContent: 'center',
    borderRadius: 20,
  },
  dynamicDuosButton: {
    padding: 10,
    margin: 10,
    width: 150,
    height: 200,
    backgroundColor: dynamicDuoColor,
    justifyContent: 'center',
    borderRadius: 20,
  },
  soloAdventureButton: {
    padding: 10,
    margin: 10,
    width: 150,
    height: 200,
    backgroundColor: soloAdventureColor,
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  emojiButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
  },

  title: {
    margin: 18,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'cochin',
  },
  categoryTitle: {
    margin: 7,
    marginTop: 10,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
  },
});
