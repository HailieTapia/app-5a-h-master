import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Perfil from './Perfil';
import Producto from './Producto';
import { Login } from './Login';
import Productos from './Productos';
import Registro from './Registro';
import Incubadora from './Incubadora';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const TabsH = createBottomTabNavigator();
const StackP = createNativeStackNavigator();

// Navegación principal (de login a home)
export const NavHome = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={NavTabsHome} options={{ headerShown: false }} />
            <Stack.Screen name='Registro' component={Registro} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};


// Navegación secundaria (tabs de home)
export const NavTabsHome = () => {
    return (
        <TabsH.Navigator>
            <TabsH.Screen
                name={'Home'}
                component={Home}
                options={{ headerShown: false, tabBarIcon: () => (<FontAwesome name='home' size={30} />) }}
            />
            <TabsH.Screen
                name={'Productos'}
                component={StackProductos}
                options={{ headerShown: false, tabBarIcon: () => (<FontAwesome name='shopping-cart' size={30} />) }}
            />
            <TabsH.Screen
                name='Incubadora'
                component={Incubadora}
                options={{ tabBarIcon: () => (<FontAwesome name='tripadvisor' size={30} />) }}
            />
            <TabsH.Screen
                name={'Perfil'}
                component={NavPerfil}
                options={{ tabBarIcon: () => (<FontAwesome name='user' size={30} />) }}
            />
        </TabsH.Navigator>
    );
};

// Navegación de productos a producto detalle
export const StackProductos = () => {
    return (
        <StackP.Navigator>
            <StackP.Screen name='Productos2' component={Productos} options={{ headerShown: false }} />
            <StackP.Screen name='Producto' component={Producto} options={{ headerShown: false }} />
        </StackP.Navigator>
    );
};

// Navegación para la pantalla de Perfil
export const NavPerfil = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Perfil'
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarPress: () => navigation.navigate('Perfil', { userId: userData._id })
                }}
            />
        </Stack.Navigator>
    );
};

export default NavHome;
