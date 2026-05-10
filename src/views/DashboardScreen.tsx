import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useAppStore } from '../store/useAppStore';

const DashboardScreen = () => {
    const myUploads = useAppStore((state) => state.myUploads);

    return (
        <ScrollView className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold text-gray-800 mb-4">Tu Actividad</Text>

            <View className="flex-row justify-between mb-6">
                <View className="bg-pastel-blue/20 p-4 rounded-2xl w-[48%] items-center">
                    <Text className="text-2xl font-bold text-pastel-blue">{myUploads.length}</Text>
                    <Text className="text-xs text-gray-600">Torneos Activos</Text>
                </View>
                <View className="bg-pastel-green/20 p-4 rounded-2xl w-[48%] items-center">
                    <Text className="text-2xl font-bold text-pastel-green">85%</Text>
                    <Text className="text-xs text-gray-600">Win Rate</Text>
                </View>
            </View>

            <Text className="text-lg font-bold text-gray-700 mb-3">Tus Participaciones Recientes</Text>

            {myUploads.length === 0 ? (
                <View className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <Text className="text-gray-400 text-center italic">
                        Aún no has subido fotos. ¡Ve a participar!
                    </Text>
                </View>
            ) : (
                <View className="flex-row flex-wrap justify-between">
                    {myUploads.map((uri, index) => (
                        <View key={index} className="w-[48%] h-40 mb-4 rounded-2xl overflow-hidden border-2 border-pastel-pink/50">
                            <Image source={{ uri }} className="w-full h-full" resizeMode="cover" />
                        </View>
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

export default DashboardScreen;