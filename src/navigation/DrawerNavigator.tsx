import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAppStore } from '../store/useAppStore';

import { DashboardScreen } from '../views/DashboardScreen';
import { HallOfFameScreen } from '../views/HallOfFameScreen';
import { SettingsScreen } from '../views/SettingsScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    // Consumimos el tema guardado en MMKV para inyectarlo en el menú flotante
    const { theme } = useAppStore();
    const isDark = theme === 'dark';

    return (
        <Drawer.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isDark ? '#1F2937' : '#FFD1DC', // Pastel Pink vs Dark Gray
                },
                headerTintColor: isDark ? '#FFFFFF' : '#1F2937',
                drawerStyle: {
                    backgroundColor: isDark ? '#111827' : '#FFFFFF',
                },
                drawerActiveTintColor: isDark ? '#38BDF8' : '#F472B6', // Neon Cyan vs Pastel Pink
                drawerInactiveTintColor: isDark ? '#9CA3AF' : '#4B5563',
            }}
        >
            <Drawer.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{ title: 'Torneos Activos' }}
            />
            <Drawer.Screen
                name="HallOfFame"
                component={HallOfFameScreen}
                options={{ title: 'Salón de la Fama' }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Ajustes y Tema' }}
            />
        </Drawer.Navigator>
    );
};