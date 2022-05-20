import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
//import { useNavigation } from "@react-navigation/native";
import firebase from '../../src/services/firebaseConnection';
export default function Login({changeStatus}){
    
    //const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   function handleLogin(){

     firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          const user= userCredential.user;
          changeStatus(user.uid)
        
      })
        .catch((err)=>{
          console.log(err);
          alert('Ops parece que deu algum erro.');
          return;
        })
      
    
    }
    return(
        <View style={styles.container}>


    
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
<Button title="Entrar" style={styles.button} onPress={handleLogin}/>

<Button title="Cadastrar" style={styles.button} onPress={()=>{navigation.navigate('Cadastro')}}/>
        </View>
    )
} 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFF",
        margin:10
    },
    text:{
        fontSize: 20
    },
    input:{
        borderColor:"#111",
        borderWidth: 2,
        padding: 10,
        height: 45,
        fontSize:17,
        marginBottom:10
    },
    button:{
        borderWidth: 2,
        borderColor:"#222"
    }
})
