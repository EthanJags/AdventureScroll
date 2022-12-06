import * as React from 'react'
import {Image, View, Platform, TouchableOpacity, Text, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';



export default function UploadImageButton() {
  const navigation = useNavigation();

  const [image, setImage] = React.useState(null);

  
  const imageButtonPress = () => {
    openImagePickerAsync();
    goToHome();
  }

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    //console.log(pickerResult);
    //alert(pickerResult.uri)

    if (pickerResult.cancelled === true) {
      return;
    }

    setImage(pickerResult.uri);
    _storeData(pickerResult.uri);

  
    navigation.navigate('HomeScreen');
    
  }


  _storeData = async (value) => {
    alert(value);
    try {
      await AsyncStorage.setItem(
        'ACTIVITY_IMAGE',
        value
      );
    } catch (error) {
      // Error saving data
      alert("error storing the image");
    }
  };

  const tileText = () => {
    <Text style={styles.buttonText}>Upload an Image</Text>
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.uploadImageButton}>
        <Text style={styles.buttonText}>Upload an Image</Text>
      </TouchableOpacity>
      {image ? <Image source={{uri: image}} style={styles.image}/> : null}
    </View>
  );
}




const styles = StyleSheet.create({
  uploadImageButton: {
    height: 50,
    width: 250,
    backgroundColor: '#585F88',
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    width: 75,
    height: 75
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
})