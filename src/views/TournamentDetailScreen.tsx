import React, { useState } from 'react';
import { View, Text, Alert, Pressable, Image } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const TournamentDetailScreen = ({ navigation }: any) => {
    const [voted, setVoted] = useState(false);

    const competitorA = 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500';
    const competitorB = 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500';

    const scaleA = useSharedValue(1);
    const opacityA = useSharedValue(1);

    const scaleB = useSharedValue(1);
    const opacityB = useSharedValue(1);

    const vsOpacity = useSharedValue(1);

    const finalizeVote = (competitor: string) => {
        Alert.alert(
            'Voto Registrado',
            `Has apoyado la captura ${competitor}.`,
            [{ text: 'Continuar', onPress: () => navigation.goBack() }]
        );
    };

    const handleVote = (competitor: 'A' | 'B') => {
        if (voted) return;
        setVoted(true);

        vsOpacity.value = withTiming(0, { duration: 300 });

        if (competitor === 'A') {
            scaleA.value = withSpring(1.05, { damping: 12 });
            scaleB.value = withTiming(0.9, { duration: 400 });
            opacityB.value = withTiming(0.3, { duration: 400 });
        } else {
            scaleB.value = withSpring(1.05, { damping: 12 });
            scaleA.value = withTiming(0.9, { duration: 400 });
            opacityA.value = withTiming(0.3, { duration: 400 });
        }

        setTimeout(() => {
            finalizeVote(competitor);
        }, 800);
    };

    const animatedStyleA = useAnimatedStyle(() => ({
        transform: [{ scale: scaleA.value }],
        opacity: opacityA.value,
    }));

    const animatedStyleB = useAnimatedStyle(() => ({
        transform: [{ scale: scaleB.value }],
        opacity: opacityB.value,
    }));

    const animatedVsStyle = useAnimatedStyle(() => ({
        opacity: vsOpacity.value,
    }));

    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold text-gray-800 mb-2 text-center">Duelo de Titanes</Text>
            <Text className="text-gray-500 text-center mb-6">¿Qué captura domina el entorno?</Text>

            <View className="flex-1 flex-col mb-4">

                <AnimatedPressable
                    onPress={() => handleVote('A')}
                    className="flex-1 rounded-3xl overflow-hidden border-4 border-pastel-blue relative"
                    style={animatedStyleA}
                >
                    <Image source={{ uri: competitorA }} className="w-full h-full" resizeMode="cover" />
                    <View className="absolute bottom-0 w-full bg-black/40 p-4">
                        <Text className="text-white font-bold text-center text-lg">Votar por esta</Text>
                    </View>
                </AnimatedPressable>

                <Animated.View style={animatedVsStyle} className="items-center justify-center -my-6 z-10 pointer-events-none">
                    <View className="bg-pastel-pink w-14 h-14 rounded-full items-center justify-center border-4 border-white shadow-sm">
                        <Text className="text-white font-bold text-xl italic">VS</Text>
                    </View>
                </Animated.View>

                <AnimatedPressable
                    onPress={() => handleVote('B')}
                    className="flex-1 rounded-3xl overflow-hidden border-4 border-pastel-lavender relative"
                    style={animatedStyleB}
                >
                    <Image source={{ uri: competitorB }} className="w-full h-full" resizeMode="cover" />
                    <View className="absolute top-0 w-full bg-black/40 p-4">
                        <Text className="text-white font-bold text-center text-lg">Votar por esta</Text>
                    </View>
                </AnimatedPressable>

            </View>
        </View>
    );
};

export default TournamentDetailScreen;