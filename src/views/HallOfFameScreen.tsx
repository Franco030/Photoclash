import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { User } from '../models';

const HallOfFameScreen = () => {
    const topUsers: User[] = [
        {
            id: '1',
            username: '@maestro_luz',
            title: 'Leyenda Urbana',
            score: 2450,
            winRate: 92,
            avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop'
        },
        {
            id: '2',
            username: '@sombras_mx',
            title: 'Maestro',
            score: 1890,
            winRate: 88,
            avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
        },
        {
            id: '3',
            username: '@lente_roto',
            title: 'Profesional',
            score: 1540,
            winRate: 75,
            avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop'
        },
        {
            id: '4',
            username: '@edwin_jaziel',
            title: 'Promesa',
            score: 850,
            winRate: 85,
            avatarUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop'
        },
    ];

    return (
        <View className="flex-1 bg-gray-50 p-4">
            <View className="mb-6 mt-2 items-center">
                <View className="bg-pastel-lavender/20 w-16 h-16 rounded-full mb-3 items-center justify-center border-2 border-pastel-lavender">
                    <Text className="text-2xl font-bold text-pastel-lavender">#1</Text>
                </View>
                <Text className="text-3xl font-bold text-gray-800">Salón de la Fama</Text>
                <Text className="text-gray-500 text-base text-center mt-1">Los fotógrafos más letales de PhotoClash</Text>
            </View>

            <FlatList
                data={topUsers}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className={`flex-row items-center p-4 mb-4 rounded-2xl border ${
                            index === 0
                                ? 'bg-pastel-lavender/10 border-pastel-lavender'
                                : 'bg-white border-gray-100 shadow-sm'
                        }`}
                    >
                        <Text className={`text-xl font-bold w-8 ${index === 0 ? 'text-pastel-lavender' : 'text-gray-400'}`}>
                            {index + 1}
                        </Text>

                        <Image
                            source={{ uri: item.avatarUrl }}
                            className="w-14 h-14 rounded-full bg-gray-200 mr-4"
                        />

                        <View className="flex-1">
                            <Text className="text-lg font-bold text-gray-800">{item.username}</Text>
                            <Text className="text-sm text-pastel-blue font-medium">{item.title}</Text>
                        </View>

                        <View className="items-end">
                            <Text className="text-lg font-bold text-gray-700">{item.score}</Text>
                            <Text className="text-xs text-gray-400">pts</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HallOfFameScreen;