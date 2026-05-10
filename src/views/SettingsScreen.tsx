import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useAppStore } from '../store/useAppStore';

const SettingsScreen = () => {
    const logout = useAppStore((state) => state.logout);

    const handleLogout = () => {
        Alert.alert(
            'Cerrar Sesión',
            '¿Estás seguro de que quieres salir de PhotoClash?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Salir', style: 'destructive', onPress: logout },
            ]
        );
    };

    const menuItems = [
        'Editar Perfil',
        'Notificaciones',
        'Seguridad y Huella',
        'Privacidad',
        'Acerca de PhotoClash'
    ];

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="bg-white p-6 items-center border-b border-gray-100 mb-4">
                <View className="w-24 h-24 rounded-full border-4 border-pastel-blue overflow-hidden mb-4">
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop' }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>
                <Text className="text-2xl font-bold text-gray-800">@edwin_jaziel</Text>
                <Text className="text-pastel-lavender font-semibold text-base mt-1">Promesa Fotográfica</Text>
            </View>

            <View className="bg-white px-6 py-2 border-y border-gray-100 mb-6">
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={item}
                        className={`py-4 flex-row justify-between items-center ${
                            index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                        onPress={() => Alert.alert('En desarrollo', `La opción de ${item} estará disponible cuando conectemos la API.`)}
                    >
                        <Text className="text-gray-700 text-lg font-medium">{item}</Text>
                        <Text className="text-pastel-blue font-bold">→</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View className="px-6 mb-8 mt-4">
                <TouchableOpacity
                    onPress={handleLogout}
                    className="bg-pastel-pink/20 border border-pastel-pink py-4 rounded-2xl items-center"
                >
                    <Text className="text-pastel-pink font-bold text-lg">Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SettingsScreen;