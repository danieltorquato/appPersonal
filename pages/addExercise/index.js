import React, { useState } from 'react';
import { Container, Img, InputDescription, InputImage, InputImageText, InputName, InputUpload} from './style';
import firebase from "../../src/services/firebaseConnection"
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
export default function addExercise () {
  const [images, setImage] = useState(null);
  const [names, setName] = useState('');
  const [descriptions, setDescription] = useState('');
  
 const  pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
console.log(result)
    if (!result.cancelled) {
      setImage(result.uri);
     // uploadImage(result.uri, "test-image2")
      
    }
 
  };
 const uploadImage = async (uri, imageName)=> {
  uri = result.uri
  imageName = names
const response = await fetch(uri);
const blob = await response.blob();
var storage = firebase.storage();
var storageRef = storage.ref().child("images/"+imageName);
return storageRef.put(blob).then(()=>{
    Alert.alert('Sucesso')
  }).catch((error)=>{
    Alert.alert(error)
  })
  }


  async function addExercise( name, description, image){
  image = images;
  name = names;
  description = descriptions
    await firebase.database().ref('Exercise').child(name).set({
     
      name: name,
      image: image,
      description: description
    })
    alert('Pegando')
    
  }
  return (
  
  <Container>
    
    <InputName placeholder="Insira o exercício" onChangeText={text=>{
      setName(text)
    }}></InputName>
    <InputImageText>{names}</InputImageText>
    <InputDescription placeholder="Insira a descrição" onChangeText={text=>{
      setDescription(text)
    }}></InputDescription>
    <InputImageText>{descriptions}</InputImageText>
    <InputImage onPress={pickImage}><Img source={{uri:images?images:"https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"}}/></InputImage>
    <InputUpload onPress={addExercise}><InputImageText>Alora</InputImageText></InputUpload>
   
    </Container>
    )
}
