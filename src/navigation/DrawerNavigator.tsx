import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../views/WelcomeScreen';
import DashboardScreen from '../views/DashboardScreen';
import TournamentsScreen from '../views/TournamentsScreen';
import TournamentDetailScreen from '../views/TournamentDetailScreen';
import UploadScreen from '../views/UploadScreen';
import HallOfFameScreen from '../views/HallOfFameScreen';
import SettingsScreen from '../views/SettingsScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function TournamentStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TournamentList" component={TournamentsScreen} />
            <Stack.Screen name="TournamentDetail" component={TournamentDetailScreen} />
        </Stack.Navigator>
    );
}

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Bienvenida"
            screenOptions={{
                headerStyle: { backgroundColor: '#AEC6CF', elevation: 0, shadowOpacity: 0 },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                drawerActiveBackgroundColor: '#FFD1DC30',
                drawerActiveTintColor: '#B39EB5',
                drawerLabelStyle: { fontSize: 16 },
            }}
        >
            <Drawer.Screen name="Bienvenida" component={WelcomeScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Inicio" component={DashboardScreen} />
            <Drawer.Screen name="Torneos" component={TournamentStack} />
            <Drawer.Screen name="Subir Foto" component={UploadScreen} />
            <Drawer.Screen name="Ganadores" component={HallOfFameScreen} />
            <Drawer.Screen name="Ajustes" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}