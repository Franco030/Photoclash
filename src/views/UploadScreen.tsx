import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function UploadScreen() {
    return (
        <View className="flex-1 bg-white items-center justify-center p-6">
            <TouchableOpacity className="bg-pastel-green w-20 h-20 rounded-full items-center justify-center mb-4">
                <Text className="text-white text-3xl">+</Text>
            </TouchableOpacity>
            <Text className="text-lg text-gray-600">Sube tu mejor toma para participar</Text>
        </View>
    );
}