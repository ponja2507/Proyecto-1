import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "../CartNavigator";
import StackNavigator from "../StackNavigator";
import Feather from "@expo/vector-icons/Feather";
import { Entypo } from '@expo/vector-icons';
import { colores } from "../../constantes/colores";
import styles from "./BottomTabNavigator.style";
import OrdenesNavigator from "../OrdenesNavigator";
import PerfilNavigator from "../PerfilNavigator";


const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
    
    return (
        <BottomTab.Navigator
            screenOptions={() => ({
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            <BottomTab.Screen name="Shop" component={StackNavigator} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Feather name= "shopping-bag" size= {24} color={focused ? colores.segundo : "black"}/>
                    )
            }}/>
            <BottomTab.Screen name="CartNav" component={CartNavigator} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Feather name= "shopping-cart" size= {24} color={focused ? colores.segundo : "black"}/>
                    )
        }}/>
            <BottomTab.Screen name="Ordenes" component={OrdenesNavigator} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Feather name= "list" size= {24} color={focused ? colores.segundo : "black"}/>
                    )
            }}/>
            <BottomTab.Screen name="Perfil" component={PerfilNavigator} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo name= "user" size= {24} color={focused ? colores.segundo : "black"}/>
                    )
            }}/>
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator