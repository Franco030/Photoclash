import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';

const TournamentDetailScreen = ({ navigation }: any) => {
    const [voted, setVoted] = useState(false);

    // simulacion
    const competitorA = 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500';
    const competitorB = 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500';

    const handleVote = (competitor: string) => {
        setVoted(true);
        Alert.alert(
            'Voto Registrado',
            `Has apoyado la captura ${competitor}.`,
            [{ text: 'Volver a Torneos', onPress: () => navigation.goBack() }]
        );
    };

    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold text-gray-800 mb-2 text-center">Duelo de Titanes</Text>
            <Text className="text-gray-500 text-center mb-6">¿Qué captura domina el entorno?</Text>

            <View className="flex-1 flex-col mb-4">
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleVote('A')}
                    disabled={voted}
                    className="flex-1 rounded-3xl overflow-hidden border-4 border-pastel-blue relative"
                >
                    <Image source={{ uri: competitorA }} className="w-full h-full" resizeMode="cover" />
                    <View className="absolute bottom-0 w-full bg-black/50 p-4">
                        <Text className="text-white font-bold text-center text-lg">Votar por esta</Text>
                    </View>
                </TouchableOpacity>

                <View className="items-center justify-center -my-6 z-10">
                    <View className="bg-pastel-pink w-14 h-14 rounded-full items-center justify-center border-4 border-white shadow-sm">
                        <Text className="text-white font-bold text-xl italic">VS</Text>
                    </View>
                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleVote('B')}
                    disabled={voted}
                    className="flex-1 rounded-3xl overflow-hidden border-4 border-pastel-lavender relative"
                >
                    <Image source={{ uri: competitorB }} className="w-full h-full" resizeMode="cover" />
                    <View className="absolute top-0 w-full bg-black/50 p-4">
                        <Text className="text-white font-bold text-center text-lg">Votar por esta</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TournamentDetailScreen;