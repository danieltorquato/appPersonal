import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../../src/contexts/auth";
import { Background, Container, HeaderAccount, ImgAccount, Informations, Measurements, MeasurementsData, MeasurementsText, MeasurementsTextIn, Name, SubmitButton, SubmitButtonMenu, SubmitText, TextInformation, TextName, TextTitle } from './style';


export default function Account() {
    const navigation = useNavigation();
    const { user, email } = useContext(AuthContext)
    return (
        <Background>
            <HeaderAccount>
                
                <Measurements>
                    <MeasurementsData><MeasurementsTextIn>120</MeasurementsTextIn></MeasurementsData>
                    <MeasurementsText>Peso</MeasurementsText>
                    <MeasurementsData><MeasurementsTextIn>1,90</MeasurementsTextIn></MeasurementsData>
                    <MeasurementsText>Altura</MeasurementsText>
                </Measurements>
            </HeaderAccount>
            <Container>
              
                <Name>
                    <TextName>{user.nome}</TextName>
                </Name>
                <Informations>
                    <TextTitle>Código</TextTitle>
                    <TextInformation>70172</TextInformation>
                    <TextTitle>Email</TextTitle>
                    <TextInformation>{user.email}</TextInformation>
                    <TextTitle>Telefone</TextTitle>
                    <TextInformation>11953898557</TextInformation>
                    <TextTitle>Data de Nascimento</TextTitle>
                    <TextInformation>23/12/1999</TextInformation>
                </Informations>
                <SubmitButton>
                    <SubmitText>Alterar Dados</SubmitText>
                </SubmitButton>
                <SubmitButtonMenu onPress={()=>navigation.navigate('Home')}>
                    <SubmitText >Voltar ao Menu</SubmitText>
                </SubmitButtonMenu>
            </Container>
        </Background>
    )
}