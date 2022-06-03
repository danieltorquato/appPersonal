import React, { useContext }  from "react";
    import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
    import Icon from 'react-native-vector-icons/Feather';
    import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../src/contexts/auth";


    export default function Home(){
     
      const navigation = useNavigation();

    const {signOut} = useContext(AuthContext);
        return(
          <ScrollView style={styles.blackBackground}>
          <ScrollView style={styles.blueBackground}>
            
            <Text style={styles.subtitle}> Treino do Dia</Text>

 
        <ScrollView style={styles.box} horizontal={true}>
        
      <View style={styles.box1}><Image style={styles.image}  source={require('./img/remada.png')}/></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        </ScrollView>
        <View style={styles.icons}>
        <View style={styles.icons2}>
        
        <TouchableOpacity>
          <Icon name="user" size={90} color="#FFF" onPress={()=>{navigation.navigate('Perfil')}}
       
          />
         
        </TouchableOpacity>
       <TouchableOpacity>
          <Icon name="clock" size={90} color="#FFF" onPress={()=>{navigation.navigate('Detalhes')}}
         
          />
       </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="clipboard" size={90} color="#FFF" onPress={()=>{navigation.navigate('Agenda')}}
          
          />
        </TouchableOpacity>
        
        </View>

        </View>

        <View style={styles.iconsText}>
        
        <Text style={styles.iconsText}>PERFIL</Text>
        <Text style={styles.iconsText}>HISTÓRICO</Text>
        <Text style={styles.iconsText}>AGENDA</Text>
        </View>
        <View style={styles.icons3}>
        
       <TouchableOpacity>
          <Icon name="activity" size={90} color="#FFF" onPress={()=>{navigation.navigate('Agenda')}}
        
      
        />
       </TouchableOpacity>
       <TouchableOpacity>
          <Icon name="calendar" size={90} color="#FFF" onPress={()=>{navigation.navigate('Horários')}}
          
           />
       </TouchableOpacity>
      <TouchableOpacity>
          <Icon name="log-out" size={90} color="#A9A9A9" onPress={()=>signOut()}
          />
          
      </TouchableOpacity>
        </View>
        <View style={styles.iconsText}>
        
        <Text style={styles.iconsText}>PROGRESSO</Text>
        <Text style={styles.iconsText}>HORÁRIOS</Text>
        <Text style={styles.iconsText}>SAIR</Text>
        </View>
        <TouchableOpacity ><Text style={styles.buttonInit}>Iniciar Treino</Text></TouchableOpacity>
        <Text style={styles.subtitle2}> Gráfico de Progresso</Text>
      <ScrollView style={styles.box} horizontal={true}>
      
      <View style={styles.box2}><Image style={styles.graphic} source={require('./img/grafico.png')}/></View>
      </ScrollView>
            </ScrollView>
      </ScrollView>
            
        )
    }
    const styles = StyleSheet.create({
        blackBackground:{
           backgroundColor:"#000013",
           flex:1,
        
         },
         blueBackground:{
           backgroundColor:"#000013",
         flex:1
         },
         headerArea:{
           borderBottomColor:"rgba(31, 31, 31, 1)",
        
           borderWidth:1,
           backgroundColor:"#000",
           height:80,
          alignItems:"center",
          justifyContent:"center"
          
         },
         headerTextName:{
          borderWidth:1,
          color:"rgba(0, 31, 195, 0.86)",
          fontSize:20,
       
         backgroundColor:"white"
         },
         headerTextPersonal:{
           borderWidth:1,
           color:"rgba(0, 31, 195, 0.86)",
           fontSize:20,
        
          marginLeft:50
          },
          headerImage:{
           height:90,
           width:90
          },
          box:{
           
           flexDirection:'row',
            padding: 10,
            alignContent:"space-around",
       
          
       },
       box1:{
         
         width: 300,
         height:300,
         margin:5,
         borderRadius: 10,
         borderWidth: 2,
         borderColor:"#FFF",
         alignItems:'center',
         justifyContent:'center'
       },
       image:{
       flex:1,
       width:290,
       height: 290,
       
       },
       box2:{
         
         width: 370,
         height:200,
        borderColor:'#FFF',
         margin:5,
         borderRadius: 10,
         borderWidth:2,
         justifyContent:'center',
         alignItems:"center"
       },
       subtitle:{
         fontSize:25,
         color: "#FFF",
         fontWeight:'bold',
         marginLeft: 15,
        marginTop: 15
       },
       subtitle2:{
         fontSize:25,
         color: "#FFF",
         fontWeight:'bold',
        textAlign:"center"
       
       },
       icons2:{
         flexDirection:"row",
         justifyContent:'space-around',
       padding:20
       },
       icons3:{
         flexDirection:"row",
        padding:20,
         justifyContent:'space-around'
       },
       iconsText:{
         flexDirection:"row",
       marginTop:-20,
       padding:20,
      
       justifyContent:'space-around',
     color:"#FFF"
       },
       buttonInit:{
         width:300,
         height:45,
       borderColor: "#fff",
       justifyContent:'center',
       alignItems: 'center',
         borderWidth:2,
        textAlign:"center",
        color:"#FFF",
        fontSize: 25,
        backgroundColor:"#008080",
        borderRadius:100,
       marginLeft:45,
       marginBottom: 20
       },
       graphic:{
         width:350,
         height:190,
         borderRadius:10
       }
       }
       )