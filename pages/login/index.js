import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../src/contexts/auth";

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
  SubmitText, Link, LinkText} from './style';


export default function LogIn() {
  const [email,setEmail] = useState();
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
 const {signIn} = useContext(AuthContext);

 function handleLogin(){
   signIn(email,password)
 }
 return (
  <Background>
  <Container>
    <Logo source={require('../home/img/logoof.png')}/>
    
    <AreaInput>
      <Input
      placeholder="Email"
      autoCorrect={false}
      autoCapitalize="none"
      value={email}
      onChangeText={ (text) => setEmail(text) }
      />
    </AreaInput>

    <AreaInput>
      <Input
      placeholder="Senha"
      autoCorrect={false}
      autoCapitalize="none"
      value={password}
      onChangeText={ (text) => setPassword(text) }
      />
    </AreaInput>

  <SubmitButton onPress={handleLogin}>
    <SubmitText>Acessar</SubmitText>
  </SubmitButton>

  <Link 
  onPress={()=>navigation.navigate('Cadastro')}
  >
    <LinkText>Criar uma conta!</LinkText>
  </Link>

  </Container>
</Background>
  )
 }