import React from "react";
import { ImageBackground, ImageBackgroundBase, ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require("../assets/images/background1.png")} style={styles.image}>
      <View>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar hidden/>
          <View style={styles.container}>
            <Text style={styles.text}></Text>
            
          </View>
        </ScrollView>
        <Footer />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // This will make the background darker, so the text is readable
    padding: 20,
    justifyContent: "center"
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    textAlign: "center",
    marginBottom: 543
  },
});

export default Home;