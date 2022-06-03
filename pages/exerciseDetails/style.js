import styled from 'styled-components/native';

 export const Background = styled.View`
 flex:1;
 background-color: #000013;

 align-items:center;
 `;
 export const Header = styled.View`
 align-items:center;
 background-color: rgba(27,37,128,0.22);
 width:100%;
 height:45%;
margin-bottom: 20px;
border-bottom-width: 1px;
border-bottom-color: #fff;
 `;
 export const Img = styled.Image`
 width: 98%;
      height: 75%;
  border-color:#FFF;
  border-width: 1px;
  border-radius: 10px;
   
      
`;
export const  ExerciseName = styled.Text`
color: #FFF;
font-size: 40px;
font-weight:bold;
margin-top: 2%;
 `;
 export const Main = styled.View`
width: 95%;
height: 40%;
 background-color: rgba(27,37,128,0.22);
 border-color:#FFF;
 border-width: 2px;
 border-radius: 10px;
 margin-bottom: 20px;

 `;
 export const  DescriptionName = styled.Text`
color: #FFF;
font-size: 30px;
font-weight:bold;
margin-top: 2%;
text-align:center;
 `;

 export const  DescriptionText = styled.Text`
color: #FFF;
font-size: 20px;
margin-top: 2%;
text-align:center;

 `;
 export const SubmitButtonMenu = styled.TouchableOpacity`
   align-items: center;
   justify-content: center;
   background-color: #011733;
   width: 90%;
   height: 40px;
   border-radius: 7px;
`;

export const SubmitText = styled.Text`
   font-size: 20px;
   color: #FFF;
`;