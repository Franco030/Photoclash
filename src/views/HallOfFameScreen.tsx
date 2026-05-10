import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { useAppStore } from '../store/useAppStore';

export const HallOfFameScreen = () => {
    const { theme } = useAppStore();
    const isDark = theme === 'dark';
    const [searchQuery, setSearchQuery] = useState('');

    const mockGanadores = [
        { id: '1', titulo: 'Viaje a la playa', fecha: '2026-05-01' },
        { id: '2', titulo: 'Graduación', fecha: '2026-04-15' },
        { id: '3', titulo: 'Cena con amigos', fecha: '2026-03-20' },
    ];

    return (
        <View className={`flex-1 p-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            {/* Mecanismo de Búsqueda (Requisito Rúbrica) */}
            <View className={`px-4 py-3 rounded-xl mb-6 flex-row items-center border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <TextInput
                    placeholder="Buscar torneo por título..."
                    placeholderTextColor={isDark ? '#9CA3AF' : '#9CA3AF'}
                    className={`flex-1 ${isDark ? 'text-white' : 'text-gray-800'}`}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            <Text className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Tus Mejores Fotos
            </Text>

            <FlatList
                data={mockGanadores.filter(g => g.titulo.toLowerCase().includes(searchQuery.toLowerCase()))}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View className={`p-4 rounded-xl mb-3 ${isDark ? 'bg-gray-800' : 'bg-pastel-pink/20'}`}>
                        <Text className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>{item.titulo}</Text>
                        <Text className={isDark ? 'text-gray-400' : 'text-gray-600'}>{item.fecha}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text className={isDark ? 'text-gray-400' : 'text-gray-500'}>No se encontraron torneos.</Text>}
            />
        </View>
    );
};