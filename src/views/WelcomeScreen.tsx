import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
    return (
        <View className="flex-1 bg-white items-center justify-center p-6">
            <View className="bg-pastel-pink w-32 h-32 rounded-full mb-8 items-center justify-center">
                <Text className="text-white text-5xl font-bold">PC</Text>
            </View>
            <Text className="text-3xl font-bold text-gray-800 mb-2">PhotoClash</Text>
            <Text className="text-center text-gray-500 mb-10">
                Captura, compite y domina el arte de la fotografía.
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Inicio')}
                className="bg-pastel-blue w-full py-4 rounded-2xl items-center"
            >
                <Text className="text-white font-bold text-lg">Comenzar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;