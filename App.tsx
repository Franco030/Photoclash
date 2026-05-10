import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import LoginScreen from './src/views/LoginScreen';
import { useAppStore } from './src/store/useAppStore';
import './global.css';

export default function App() {
    const isAuthenticated = useAppStore((state) => state.isAuthenticated);

    return (
        <NavigationContainer>
            {/* Renderizado condicional mágico */}
            {isAuthenticated ? <DrawerNavigator /> : <LoginScreen />}
        </NavigationContainer>
    );
}