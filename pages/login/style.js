import styled from 'styled-components/native';




 export const Background = styled.View`
 flex:1;
 background-color: #131313;
 `;
 export const Container = styled.KeyboardAvoidingView`
 flex:1;
 align-items: center;
 justify-content: center;
 `;
 export const Logo = styled.Image`
 margin-bottom: 0px;
 width: 100%;
 height: 63%;
 `;
 export const AreaInput = styled.View`
 flex-direction: row;
 `;
 export const Input = styled.TextInput.attrs({
     placeholderTextColor: 'rgba(255,255,255,0.20)'
 })`
 background: rgba(0,0,0,0.20);
 width: 90%;
 font-size: 17px;
 color: #FFF;
 margin-bottom: 15px;
 padding: 10px;
 border-radius: 7px;
 `;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #022859;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const Link = styled.TouchableOpacity`
     align-items: center;
    justify-content: center;
    background-color: #011526;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
    
`;

export const LinkText = styled.Text`
    color: #FFF;
   
`;