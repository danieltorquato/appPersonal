import React, { useState } from 'react';
import { Container, Img, InputDescription, InputImage, InputImageText, InputName} from './style';
import firebase from "../../src/services/firebaseConnection"
import Icon from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import { ref } from 'firebase/database';
import { Alert } from 'react-native';
export default function addExercise () {
  const [image, setImage] = useState(null);

 const  pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
console.log(result)
    if (!result.cancelled) {
      setImage(result.uri);
      uploadImage(result.uri, "test-image2")
      .then(()=>{
        Alert.alert('Sucesso')
      }).catch((error)=>{
        Alert.alert(error)
      })
    }
 
  };
 const uploadImage = async (uri, imageName)=> {
const response = await fetch(uri);
const blob = await response.blob();
var storage = firebase.storage();
var storageRef = storage.ref().child("images/"+imageName);
return storageRef.put(blob)
  }

  return (
  
  <Container>
    
    <InputName placeholder="Insira o exercício" ></InputName>
    <InputDescription placeholder="Insira a descrição"></InputDescription>
    <InputImage onPress={pickImage}><Img source={{uri:image?image:"https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"}}/></InputImage>

   
    </Container>
    )
}
