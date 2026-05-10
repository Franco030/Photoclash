import React from 'react';
import { View, Text } from 'react-native';

export default function TournamentDetailScreen() {
    return (
        <View className="flex-1 bg-white items-center justify-center p-6">
            <View className="bg-pastel-lavender/10 w-full h-64 rounded-3xl border-2 border-dashed border-pastel-lavender items-center justify-center">
                <Text className="text-pastel-lavender font-medium text-center">
                    Aquí se mostrará el enfrentamiento de fotos (Clash)
                </Text>
            </View>
            <Text className="text-xl font-bold mt-6 text-gray-700">Duelo de Titanes</Text>
        </View>
    );
}