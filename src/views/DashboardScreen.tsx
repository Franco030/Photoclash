import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const DashboardScreen = () => {
    return (
        <ScrollView className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold text-gray-800 mb-4">Tu Actividad</Text>
            <View className="flex-row justify-between mb-6">
                <View className="bg-pastel-blue/20 p-4 rounded-2xl w-[48%] items-center">
                    <Text className="text-2xl font-bold text-pastel-blue">12</Text>
                    <Text className="text-xs text-gray-600">Torneos</Text>
                </View>
                <View className="bg-pastel-green/20 p-4 rounded-2xl w-[48%] items-center">
                    <Text className="text-2xl font-bold text-pastel-green">85%</Text>
                    <Text className="text-xs text-gray-600">Win Rate</Text>
                </View>
            </View>
            <Text className="text-lg font-bold text-gray-700 mb-3">Ranking Global</Text>
            <View className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <Text className="text-gray-400 text-center italic">Cargando estadísticas mundiales...</Text>
            </View>
        </ScrollView>
    );
};

export default DashboardScreen;