import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {View, Text} from "react-native";
import { Background, DescriptionName, DescriptionText, ExerciseName, Header, Img, Main, SubmitButtonMenu, SubmitText } from "./style"

export default function exerciseDetails(){
    const navigation = useNavigation();
    return(
        <Background>
            
           <Header><ExerciseName>Remada</ExerciseName>
           <Img source={require('../home/img/remada.png')}></Img>
           </Header>
        <Main>
            <DescriptionName>Descrição</DescriptionName>
            <DescriptionText>Remada alta é um exercício multiarticular que tem por objetivo principal trabalhar a musculatura dos ombros e trapézio.</DescriptionText>
        </Main>
        
        <SubmitButtonMenu onPress={()=>navigation.navigate('Home')}>
                    <SubmitText >Voltar ao Menu</SubmitText>
                </SubmitButtonMenu>
        </Background>
    )
} 