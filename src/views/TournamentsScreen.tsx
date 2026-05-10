import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

const TournamentsScreen = ({ navigation }: any) => {
    // Datos simulados que luego vendrán de la API
    const tournaments = [
        {
            id: '1',
            name: 'Atardeceres de la Ciudad',
            status: 'Activo',
            participants: 124,
            image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800'
        },
        {
            id: '2',
            name: 'Arquitectura Brutalista',
            status: 'Activo',
            participants: 89,
            image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800'
        },
        {
            id: '3',
            name: 'Vida Nocturna',
            status: 'Finalizando',
            participants: 342,
            image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800'
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
                            source={{ uri: item.image }}
                            className="w-full h-full justify-end"
                            resizeMode="cover"
                        >
                            <View className="absolute inset-0 bg-black/40" />

                            <View className="p-5 flex-row justify-between items-end">
                                <View className="flex-1 pr-4">
                                    <Text className="text-white text-2xl font-bold mb-1" numberOfLines={2}>
                                        {item.name}
                                    </Text>
                                    <Text className="text-gray-200 text-sm font-medium">
                                        {item.participants} fotógrafos compitiendo
                                    </Text>
                                </View>

                                <View className={`px-3 py-1.5 rounded-full ${item.status === 'Activo' ? 'bg-pastel-green' : 'bg-pastel-pink'}`}>
                                    <Text className="text-white font-bold text-xs">{item.status}</Text>
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