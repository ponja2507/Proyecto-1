import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Perfil } from "../screens";


const PerfilStack = createNativeStackNavigator()

function PerfilNavigator() {
    return(
            <PerfilStack.Navigator 
                initialRouteName="Perfil"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <PerfilStack.Screen name="Perfil" component={Perfil}/>
            </PerfilStack.Navigator>
    )
}

export default PerfilNavigator