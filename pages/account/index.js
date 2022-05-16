import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Account() {
    return (
        <View>

            <View style={styles.perfil}>
                <Image source={require('./img/perfil.png')} style={styles.imageAccount} />

                <View >

                    <View style={styles.heightAndWeight}>
                        <Text style={styles.heightAndWeightItem}>287</Text>

                    </View>
                    <Text style={styles.heightAndWeightText}>PESO</Text>
                    <View style={styles.heightAndWeight}>

                        <Text style={styles.heightAndWeightItem}>1,90</Text>
                    </View>
                    <Text style={styles.heightAndWeightText}>ALTURA</Text>
                </View>
            </View>
            <View style={styles.dados}>
                <Text style={styles.fullName}>DANIEL MONTEIRO DA SILVA TORQUATO</Text>
                <View style={styles.dados2}>
                    <View style={styles.dataUsers}>
                        <Text style={styles.titleData}>Código</Text>
                        <Text style={styles.userData}>70172</Text>
                    </View>
                    <View style={styles.dataUsers2}>
                        <Text style={styles.titleData}>Data de Nascimento</Text>
                        <Text style={styles.userData2}>23/12/1999</Text>
                    </View>

                </View>
                <View style={styles.dados3}>
                    <View style={styles.dataUsers3}>
                        <Text style={styles.titleData2}>Email</Text>
                        <Text style={styles.userData3}>danieltorquato2009@gmail.com</Text>
                    </View></View>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    imageAccount: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#FFF",
        marginTop: 5
    },
    perfil: {
        flexDirection: "row",
        backgroundColor: "#808080",

    },
    heightAndWeight: {
        padding: 0,
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: "#222",
        width: 150,
        height: 70,
        alignItems: "center",
        borderRadius: 15
    },
    heightAndWeightItem: {
        color: "#FFF",
        padding: 10,
        fontSize: 30
    },
    heightAndWeightText: {
        textAlign: "center",
        fontSize: 20,
        marginLeft: 5

    },
    dados: {

        backgroundColor: "#A9A9A9",
        width: 430,
        height: 600,


    },
    dados2: {

        flexDirection: "row",
        marginTop: 30,
        alignContent: 'space-around'
    },
    fullName: {
        fontSize: 40,
        marginTop: 10,
        marginLeft: 5
    },
    titleData: {
        fontSize: 22
    },
    userData: {
        fontSize: 20,
        marginLeft: 5,
        fontWeight: "bold"
    },
    titleData2: {
        fontSize: 22,
        marginLeft: 130
    },
    userData3: {
        fontSize: 20,
        
        fontWeight: "bold"
    },
    userData2: {
        fontSize: 20,
        marginLeft: 50,
        fontWeight: "bold"
    },
    dataUsers: {
        marginRight: 80,
        marginLeft: 30
    },
    dados3:{
    
        alignItems:"center"
    }
})