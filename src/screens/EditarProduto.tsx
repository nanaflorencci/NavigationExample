import React, { useEffect, useState } from "react";
import Head from '../components/Head';
import { StatusBar, StyleSheet, TouchableOpacity, View, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Footer from "../components/Footer";

interface Produto {
    id: number;
    nome: string;
    ingredientes: string;
    preco: number;
    imagem: string;
}

const EditarProduto: React.FC = () =>{

    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('0');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<string>('');

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(()=> {
        const {produto} = route.params;

        setNome(produto.nome);
        setPreco(produto.preco);
        setIngredientes(produto.ingredientes);
        setImagem(produto.imagem);
    })

    return(
        <View>
            <StatusBar backgroundColor="dark" barStyle="light-content"/>
            <Head/>
            <View style={styles.form}>
                <TextInput style={styles.input} value={nome} onChangeText={setNome}/>
                <TextInput style={styles.input} value={preco} onChangeText={setPreco} keyboardType="numeric"/>
                <TextInput style={styles.input} value={ingredientes} onChangeText={setIngredientes} multiline/>
                
            <TouchableOpacity style={styles.button} onPress={()=> navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.menuList}></View>
            <Footer/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        backgroundColor: "#000000",
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form:{
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input:{
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imagemButton:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imagemButtonText:{
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionada:{
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada:{
        alignItems: 'center'
    },
    button:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold'
    },
    menuList:{
        flexGrow: 1
    },
});

export default EditarProduto;