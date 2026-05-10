import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAppStore } from '../store/useAppStore';

export const DashboardScreen = ({ _navigation }: any) => {
    const { theme } = useAppStore();
    const isDark = theme === 'dark';

    return (
        <View className={`flex-1 items-center justify-center p-6 ${isDark ? 'bg-gray-900' : 'bg-pastel-pink'}`}>
            <View className={`p-8 rounded-3xl w-full max-w-sm items-center shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <Text className={`text-2xl font-bold mb-2 text-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Bienvenido a PhotoClash
                </Text>
                <Text className={`text-center mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    ¿Listo para descubrir tu foto favorita del día?
                </Text>

                <TouchableOpacity
                    className={`w-full py-4 rounded-xl items-center ${isDark ? 'bg-cyan-500' : 'bg-pastel-blue'}`}
                    onPress={() => console.log('Navegar a configurar torneo')}
                >
                    <Text className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        Iniciar Nuevo Torneo
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};