import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Acceder, Registrarse } from "../screens";

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
    return(
            <AuthStack.Navigator 
                initialRouteName="Registrarse"
                screenOptions={({route, navigation}) => ({
                    headerShown: false,
                })}
            >
                <AuthStack.Screen name="Registrarse" component={Registrarse} />
                <AuthStack.Screen name="Acceder" component={Acceder}/>
            </AuthStack.Navigator>
    )
}

export default AuthStackNavigator