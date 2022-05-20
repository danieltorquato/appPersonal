import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity, SafeAreaView, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from '../../src/services/firebaseConnection';

export default function LogIn({changeStatus}) {
   
    const [type, setType] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin(){
   
    if(type === 'login'){
      // Aqui fazemos o login
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        changeStatus(user.user.uid)
      })
      .catch((err)=>{
        console.log(err);
        alert('Ops parece que deu algum erro.');
        return;
      })

    }else{
     // Aqui cadastramos o usuario 
     const user = firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((user)=>{
       changeStatus(user.user.uid)
     })
     .catch((err)=>{
      console.log(err);
      alert('Ops parece que algo está errado!');
      return;
     })


    }

  }

 return (
   <SafeAreaView style={styles.container}>
     <Image source={require("../home/img/logoof.png")} style={styles.logoImage}
              
              />
    <TextInput
      placeholder="Seu email"
      style={styles.input}
      value={email}
      onChangeText={ (text) => setEmail(text) }
    />

    <TextInput
      placeholder="*********"
      style={styles.input}
      value={password}
      onChangeText={ (text) => setPassword(text) }
    />

    <TouchableOpacity
      style={[styles.handleLogin, { backgroundColor: type === 'login' ? '#3ea6f2' : '#FFF' } ]}
      onPress={handleLogin}
    >
      <Text style={styles.loginText}>
        { type === 'login' ? 'Acessar' : 'Cadastrar' }
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')} >
      <Text style={ styles.cadastrar}>
        {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta' }
      </Text>
    </TouchableOpacity>



   </SafeAreaView>
  );
}
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
     
      backgroundColor: '#000',
    
      alignItems: 'center',
      justifyContent:'center',
    },
    input:{
      
      marginBottom: 10,
      backgroundColor: '#FFF',
      borderRadius: 4,
      height: 45,
      width:"70%",
     
      borderWidth: 1,
      borderColor: '#141414'
    },
    handleLogin:{
      
      height: 45,
      marginBottom: 10,
      width:"70%",
      alignItems: 'center',
      justifyContent:'center',
    },
    loginText:{
       
      color: '#222',
      fontSize: 17,
    },
    logoImage:{
        width:250,
        height: 280
    },
    cadastrar:{
        textAlign:"center",
        color: "#FFF"
    }
  })