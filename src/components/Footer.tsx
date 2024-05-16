import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Muvinn')}>
                <Image source={require('../assets/images/muvinn.png')}
                style={styles.footerIcone} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('List')}>
                <Image source={require('../assets/images/list.png')}
                style={styles.footerIcone} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Pesquisar')}>
                <Image source={require('../assets/images/lupe.png')}
                style={styles.footerIcone} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#ddbdd5',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical: 10,
        width: 390,
        borderRadius: 10
    },
    footerIcone: {
        width: 30,
        height: 30
    }
});

export default Footer;