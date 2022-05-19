import React from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Login(){
    const navigation = useNavigation()
    
    return(
        <View style={styles.container}>

<View><Text style={styles.text}>Login:</Text><TextInput style={styles.input}/></View>
<View><Text style={styles.text}>Senha:</Text><TextInput style={styles.input}/></View>
<Button title="Entrar" style={styles.button}/>

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