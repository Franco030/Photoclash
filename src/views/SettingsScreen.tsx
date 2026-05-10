import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
    return (
        <View className="flex-1 bg-white p-6">
            <Text className="text-2xl font-bold text-gray-800 mb-6">Configuración</Text>
            <View className="space-y-4">
                {['Perfil', 'Notificaciones', 'Seguridad y Huella', 'Privacidad'].map((item) => (
                    <TouchableOpacity key={item} className="border-b border-gray-100 py-4 flex-row justify-between">
                        <Text className="text-gray-700 text-lg">{item}</Text>
                        <Text className="text-pastel-blue">→</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default SettingsScreen;