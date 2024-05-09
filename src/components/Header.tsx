import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header(): React.JSX.Element {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Muvinn</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {

    },
    headerTitle: {

    }
});

export default Header;