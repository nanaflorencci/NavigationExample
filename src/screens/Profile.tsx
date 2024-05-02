import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";

function Profile(): React.JSX.Element{
    return(
        <View>
            <Head/>
            <Text>Tela perfil</Text>
            <Footer/>
        </View>
    );
}

export default Profile;