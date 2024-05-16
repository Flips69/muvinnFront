import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Muvinn(): React.JSX.Element {



    return (
        <View>
            <Header />
                <View style={styles.container}>
                    <Text style={styles.text}>MUVINN</Text> 
                </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    text: {
        fontWeight: 'bold'
    }
});

export default Muvinn;