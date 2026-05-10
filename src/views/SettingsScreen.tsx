import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useAppStore } from '../store/useAppStore';

export const SettingsScreen = () => {
    const { theme, setTheme, biometricEnabled, toggleBiometric } = useAppStore();
    const isDark = theme === 'dark';

    return (
        <View className={`flex-1 p-6 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <Text className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Ajustes
            </Text>

            <View className="mb-8">
                <Text className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Apariencia de la Aplicación
                </Text>
                <View className="flex-row space-x-4">
                    <TouchableOpacity
                        onPress={() => setTheme('pastel')}
                        className={`flex-1 p-4 rounded-xl items-center border-2 ${!isDark ? 'border-pastel-pink bg-pastel-pink/20' : 'border-gray-700 bg-gray-800'}`}
                    >
                        <Text className={!isDark ? 'text-gray-800 font-bold' : 'text-gray-400'}>Modo Pastel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setTheme('dark')}
                        className={`flex-1 p-4 rounded-xl items-center border-2 ${isDark ? 'border-cyan-400 bg-cyan-400/20' : 'border-gray-200 bg-gray-50'}`}
                    >
                        <Text className={isDark ? 'text-white font-bold' : 'text-gray-400'}>Modo Oscuro</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className={`flex-row justify-between items-center p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <View>
                    <Text className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        Bloqueo Biométrico
                    </Text>
                    <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Requerir huella para abrir la app
                    </Text>
                </View>
                <Switch
                    value={biometricEnabled}
                    onValueChange={toggleBiometric}
                    trackColor={{ false: '#767577', true: isDark ? '#38BDF8' : '#F472B6' }}
                    thumbColor={'#f4f3f4'}
                />
            </View>
        </View>
    );
};