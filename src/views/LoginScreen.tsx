import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useAppStore } from '../store/useAppStore';

const LoginScreen = () => {
    const login = useAppStore((state) => state.login);

    const handleBiometricAuth = async () => {
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
        if (!isBiometricAvailable) {
            Alert.alert('Error', 'Tu dispositivo no soporta biometría.');
            return;
        }

        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics) {
            Alert.alert('Error', 'No tienes huellas configuradas en tu celular.');
            return;
        }

        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Desbloquea PhotoClash',
            fallbackLabel: 'Usar PIN',
            cancelLabel: 'Cancelar',
            disableDeviceFallback: false,
        });

        if (biometricAuth.success) {
            login();
        }
    };

    useEffect(() => {
        handleBiometricAuth();
    }, []);

    return (
        <View className="flex-1 bg-white items-center justify-center p-6">
            <View className="bg-pastel-pink w-32 h-32 rounded-full mb-8 items-center justify-center">
                <Text className="text-white text-5xl font-bold">PC</Text>
            </View>
            <Text className="text-3xl font-bold text-gray-800 mb-2">PhotoClash</Text>
            <Text className="text-center text-gray-500 mb-10">
                Tu galería urbana privada y segura.
            </Text>

            <TouchableOpacity
                onPress={handleBiometricAuth}
                className="bg-pastel-blue w-full py-4 rounded-2xl items-center shadow-sm"
            >
                <Text className="text-white font-bold text-lg">Ingresar con Huella</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;