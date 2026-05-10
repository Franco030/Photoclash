import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function TournamentsScreen({ navigation }: any) {
    const tournaments = [
        { id: '1', name: 'Atardeceres de Saltillo', status: 'Activo' },
        { id: '2', name: 'Arquitectura Colonial', status: 'Cerrado' },
    ];

    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold text-pastel-blue mb-4">Torneos Activos</Text>
            <FlatList
                data={tournaments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="bg-pastel-pink/20 p-4 rounded-2xl mb-3 border border-pastel-pink/30"
                        onPress={() => navigation.navigate('TournamentDetail', { id: item.id })}
                    >
                        <Text className="text-lg font-semibold text-gray-800">{item.name}</Text>
                        <Text className="text-sm text-pastel-green font-bold">{item.status}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}