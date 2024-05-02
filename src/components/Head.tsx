import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Head(): React.JSX.Element{
    return(
        <View style={styles.Header}>
            <Text style={styles.HeaderText}>App Exemplo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        backgroundColor: 'black',
        paddingVertical: 10,
        alignItems: 'center'
    },
    HeaderText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Head;