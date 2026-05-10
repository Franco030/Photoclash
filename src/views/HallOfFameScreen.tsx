import React from 'react';
import { View, Text, FlatList } from 'react-native';

const HallOfFameScreen = () => {
    const winners = [
        { id: '1', user: '@edwin_jaziel', title: 'Maestro de la Luz' },
        { id: '2', user: '@urban_shot', title: 'Rey del Contraste' },
    ];

    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold text-pastel-lavender mb-4">Salón de la Fama</Text>
            <FlatList
                data={winners}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="bg-pastel-lavender/10 p-5 rounded-3xl mb-4 border border-pastel-lavender/20 flex-row items-center">
                        <View className="w-12 h-12 bg-pastel-lavender rounded-full mr-4" />
                        <View>
                            <Text className="font-bold text-gray-800">{item.user}</Text>
                            <Text className="text-gray-500">{item.title}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default HallOfFameScreen;