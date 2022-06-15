import styled from 'styled-components/native';

 export const Background = styled.View`
 flex:1;
 background-color: #000013;
 `;
 export const HeaderAccount = styled.View`
 flex-direction: row;
 height:34%;
 padding: 10px;
 justify-content: space-between;
 background-color: #000017;
 border-radius: 10px
 `;
  export const Container = styled.View`
 flex: 1;
align-items: center;
justify-content:center;
  `;
 export const ImgAccount = styled.Image`
   width: 200;
        height: 200;
        border-radius: 100;
        border-width: 2;
        border-color: #FFF;
        margin-top: 5;
        color: #FFF;
 `;
 export const MeasurementsData = styled.View`
border-width: 2;
        border-color: #FFF;
        height:30%;
        width: 80%;
        border-radius: 10px;
       margin-bottom: 10px;
       align-items:center;
 `;
  export const Measurements = styled.View`
  border-width: 3;
        border-color: #FFF;
        height:90%;
        width: 46%;
        margin-top: 5;
        padding: 8px;
        border-radius: 10px;
        align-items:center;
  `;
   export const  MeasurementsText = styled.Text`
   color: white;
   font-size: 20px;
   text-align: center;
   justify-content:center;
    `;
      export const  MeasurementsTextIn = styled.Text`
      color: white;
      font-size: 25px;
      font-weight: bold;
      margin-top: 5px
       `;
 
   export const Name = styled.View`
   align-items: center;
 margin-top: -40px;
 margin-bottom: 30px;
   `;
     export const Informations = styled.View`
      margin-bottom: 10px;
     align-items: center;
       
     `;
     export const TextName= styled.Text`
     color: white;
     font-size: 30px;
     font-weight: bold;

      `;
 export const TextTitle = styled.Text`
color: white;
font-size: 22px;
padding: 5px;
margin-bottom: 7px;
margin-top: -10px;
font-weight: bold;
 `;
  export const TextInformation = styled.Text`
  color: white;
  font-size:17px;
  margin-top: -10px;
 
  border-radius: 10px;

width: 400px;
height: 30px;
text-align:center;
background-color: #000017
   `;
   export const SubmitButton = styled.TouchableOpacity`
   align-items: center;
   justify-content: center;
   background-color: #022859;
   width: 90%;
   height: 40px;
   border-radius: 7px;
   margin-top: 7px;
`;
export const SubmitButtonMenu = styled.TouchableOpacity`
   align-items: center;
   justify-content: center;
   background-color: #011733;
   width: 90%;
   height: 40px;
   border-radius: 7px;
   margin-top: 7px;
`;

export const SubmitText = styled.Text`
   font-size: 20px;
   color: #FFF;
`;