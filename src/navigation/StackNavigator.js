import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detalle, Home, Productos } from "../screens";


const Stack = createNativeStackNavigator()

function StackNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={({route, navigation}) => ({
                    headerShown: false,
                })}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Productos" component={Productos} />
                <Stack.Screen name="Detalle" component={Detalle} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator