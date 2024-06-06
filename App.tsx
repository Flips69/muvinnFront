import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CadastroImovel from "./src/screens/CadastroImovel";
import Listagem from "./src/screens/Listagem";
import Home from "./src/screens/Home";
// import EditarImovel from "./src/screens/EditarImovel";

const Stack = createStackNavigator();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}
                options={{ headerShown: false }} />
                <Stack.Screen name='Listagem' component={Listagem}
                options={{ headerShown: false }} />
                <Stack.Screen name='Cadastro' component={CadastroImovel}
                options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;