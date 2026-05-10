import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useAppStore } from './src/store/useAppStore';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

export default function App() {
    const { theme } = useAppStore();
    const isDark = theme === 'dark';

    return (
        <NavigationContainer>
            <StatusBar style={isDark ? 'light' : 'dark'} />
            {/* Aquí irá la lógica del SplashScreen y Login Biométrico más adelante */}
            <DrawerNavigator />
        </NavigationContainer>
    );
}