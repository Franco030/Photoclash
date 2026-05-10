import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadScreen = () => {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Permiso denegado', 'Se requiere acceso a la cámara para tomar fotos en PhotoClash.');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const clearImage = () => {
        setImage(null);
    };

    return (
        <View className="flex-1 bg-white items-center p-6">
            <Text className="text-2xl font-bold text-gray-800 mb-6 mt-4">Prepara tu disparo</Text>

            {image ? (
                <View className="w-full items-center">
                    <View className="w-full h-80 rounded-3xl overflow-hidden border-4 border-pastel-pink mb-6">
                        <Image source={{ uri: image }} className="w-full h-full" resizeMode="cover" />
                    </View>

                    <View className="flex-row w-full justify-between space-x-4">
                        <TouchableOpacity
                            onPress={clearImage}
                            className="flex-1 bg-gray-100 py-4 rounded-2xl items-center border border-gray-200"
                        >
                            <Text className="text-gray-600 font-bold text-lg">Descartar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-1 bg-pastel-green py-4 rounded-2xl items-center">
                            <Text className="text-white font-bold text-lg">Participar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View className="w-full space-y-4">
                    <View className="bg-pastel-blue/10 w-full h-64 rounded-3xl border-2 border-dashed border-pastel-blue items-center justify-center mb-6">
                        <Text className="text-pastel-blue font-medium text-center px-8">
                            Aún no has seleccionado ninguna fotografía para competir.
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={takePhoto}
                        className="bg-pastel-blue w-full py-4 rounded-2xl items-center"
                    >
                        <Text className="text-white font-bold text-lg">Abrir Cámara</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={pickImage}
                        className="bg-pastel-lavender w-full py-4 rounded-2xl items-center"
                    >
                        <Text className="text-white font-bold text-lg">Elegir de la Galería</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default UploadScreen;