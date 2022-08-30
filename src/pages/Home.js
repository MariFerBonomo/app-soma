//1° passo - Importra o React
import React, {useState} from "react";

//2° passo - importar os componentes da interface gráfica
//View, text, TextInput, TouchableOpacity, StyleSheet
import {View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Alert } from "react-native-web";

//3° passo - Criar a tela
export default function Home (){

    //5° Passo - Criando as variaveis
    let [valor1, setValor1] = useState();
    let [valor2, setValor2] = useState();
    let [total, setTotal] = useState();

    //6° Passo - Criara a função Calcular
    function CalcularTotal(){

        let resultado = parseFloat(valor1) + parseFloat(valor2);
        setTotal(resultado);

        alert("O Resultado total: " + total);
    }


    return(
        <View style= {styles.container}>
            <Text style= {styles.titulo}>Projeto Soma</Text>

            <TextInput onChangeText={setValor1} style= {styles.campo} placeholder="Digite um número"/>

            <TextInput onChangeText={setValor2} style= {styles.campo} placeholder="Digite um número"/>

            <TouchableOpacity style= {styles.botao} onPress={CalcularTotal}>
                <Text style= {styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
} 

//4° passo - Adicionado os estilos 
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3B3936',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',        
    },

    titulo:{
        fontSize:25,
        color:'#FFF',
        fontWeight:'bold',
        marginBottom: 40
    },

    campo:{
        backgroundColor:'#B2BEBF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width:300,
        borderRadius: 10,
    },

    botao:{
        backgroundColor:'#BD2A2E',
        alignItems: 'center',
        padding: 15,
        borderRadius:7,
        marginTop: 20,
        widht: 250
    },

    botaoTexto: {
        color: "",
        fontSize:17,
        fontWeight: "700",

    }
});