import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
background-color: #000013;

`;
export const InputName = styled.TextInput.attrs({
    placeholderTextColor: "#FFF",
    
  })`
  border-width: 1px;
  border-color: #fff;
  border-radius:10px;
  color: #FFF;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const InputDescription = styled.TextInput.attrs({
    placeholderTextColor: "#FFF",
    
  })`
border-width: 1px;
  border-color: #fff;
  border-radius:10px;
  color: #FFF;
  margin-top: 10px
`;
export const InputImage = styled.TouchableOpacity`

`;
export const InputImageText = styled.Text`
color: #FFF
`;