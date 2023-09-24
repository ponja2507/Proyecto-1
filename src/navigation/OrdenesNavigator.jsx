import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ordenes } from "../screens";


const Stack = createNativeStackNavigator()

function OrdenesNavigator() {
    return(
            <Stack.Navigator 
                initialRouteName="Ordenes"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Ordenes" component={Ordenes}/>
            </Stack.Navigator>
    )
}

export default OrdenesNavigator