import React from 'react';
import { Container, InputDescription, InputImage, InputImageText, InputName} from './style';
import firebase from "../../src/services/firebaseConnection"
import Icon from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function addExercise () {
  function openAlbum(){
    const options = {
      title: 'Selecione uma foto',
      chooseFromLibraryButtonTitle: 'Buscar foto do album..',
      noData: true,
      mediaType: 'photo'
    };

   launchImageLibrary(options, (response) => {

      if(response.didCancel){
        console.log('Image Picker cancelado...');
      }else if(response.error){
        console.log('Gerou algum erro: ' + response.error);
      }else{
        setCapturedPhoto(response.uri);
        setOpen(true);
      }

    })


  }

  return (
  <Container>
    
    <InputName placeholder="Insira o exercício" ></InputName>
    <InputDescription placeholder="Insira a descrição"></InputDescription>
    <InputImage onPress={openAlbum}><Icon name="user" size={90} color="#FFF"></Icon></InputImage>
    
    </Container>
    )
}
