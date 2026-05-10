import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Tournament } from '../models';

const TournamentsScreen = ({ navigation }: any) => {
    const tournaments: Tournament[] = [
        {
            id: '1',
            title: 'Atardeceres de la Ciudad',
            description: 'Captura la esencia del crepúsculo urbano.',
            status: 'active',
            participantsCount: 124,
            coverImageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
            createdAt: '2026-05-01T00:00:00Z',
            endDate: '2026-05-15T00:00:00Z'
        },
        {
            id: '2',
            title: 'Arquitectura Brutalista',
            description: 'El concreto en su máxima expresión.',
            status: 'active',
            participantsCount: 89,
            coverImageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
            createdAt: '2026-05-05T00:00:00Z',
            endDate: '2026-05-20T00:00:00Z'
        },
    ];

    return (
        <View className="flex-1 bg-gray-50 p-4">
            <View className="mb-6 mt-2">
                <Text className="text-3xl font-bold text-gray-800">Explorar</Text>
                <Text className="text-gray-500 text-base">Únete a los retos fotográficos de hoy</Text>
            </View>

            <FlatList
                data={tournaments}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        className="w-full h-48 mb-6 rounded-3xl overflow-hidden shadow-sm border border-gray-200"
                        onPress={() => navigation.navigate('TournamentDetail', { id: item.id })}
                    >
                        <ImageBackground
                            source={{ uri: item.coverImageUrl }}
                            className="w-full h-full justify-end"
                            resizeMode="cover"
                        >
                            <View className="absolute inset-0 bg-black/40" />

                            <View className="p-5 flex-row justify-between items-end">
                                <View className="flex-1 pr-4">
                                    <Text className="text-white text-2xl font-bold mb-1" numberOfLines={2}>
                                        {item.title}
                                    </Text>
                                    <Text className="text-gray-200 text-sm font-medium">
                                        {item.participantsCount} fotógrafos compitiendo
                                    </Text>
                                </View>

                                <View className={`px-3 py-1.5 rounded-full ${item.status === 'active' ? 'bg-pastel-green' : 'bg-pastel-pink'}`}>
                                    <Text className="text-white font-bold text-xs uppercase">{item.status}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default TournamentsScreen;