import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('../assets/images/')}
                style={styles.footerIcone} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/images/')}
                style={styles.footerIcone} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/images/')}
                style={styles.footerIcone} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        
    },
    footerIcone: {

    }
});

export default Footer;