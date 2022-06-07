import React from "react";
import { Text, View } from "react-native";
import { Container, TextTitle, TextInfo } from "./style";

export default function HistoricoList({data}){
return(
    <Container>
        <TextInfo>Treino Finalizado </TextInfo>
     <TextTitle>{data.date}</TextTitle>
      
        
        
      
    </Container>
)
}