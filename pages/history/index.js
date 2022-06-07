import React, { useContext, useState, useEffect } from "react";
import HistoricoList from "../historicoList";
import { Background, List, Title } from "./style";
import {AuthContext} from "../../src/contexts/auth"
import firebase from "../../src/services/firebaseConnection"
import { format } from "date-fns";
export default function History(){
    const [historico, setHistorico] = useState([
    ]);
    const {user} = useContext(AuthContext);
    const uid = user && user.uid;
    db = firebase.database();
    useEffect(()=>{
       
async function loadHistory() {
    await db.ref('History').child(uid).orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
    .limitToLast(10).on('value', (snapshot)=>{
        setHistorico([]);
        snapshot.forEach((childItem) => {
            let list = {
                key: childItem.key,
                date: childItem.val().date,
              
            };
            setHistorico(oldArray=> [...oldArray, list])
        });
    })
}
loadHistory();
    },[])
    return(
      <Background>
          <Title>Histórico</Title>
          <List
          showsVerticalScrillIndicator={false}
          data= {historico}
          keyExtractor={item=>item.key}
          renderItem={({item})=>(<HistoricoList data={item}/>)}
          />
      </Background> 
    )
} 
