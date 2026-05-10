import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppState {
    theme: 'pastel' | 'dark';
    fontFamily: 'sans' | 'serif';
    biometricEnabled: boolean;
    setTheme: (theme: 'pastel' | 'dark') => void;
    setFontFamily: (font: 'sans' | 'serif') => void;
    toggleBiometric: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            theme: 'pastel',
            fontFamily: 'sans',
            biometricEnabled: false,
            setTheme: (theme) => set({ theme }),
            setFontFamily: (fontFamily) => set({ fontFamily }),
            toggleBiometric: () => set((state) => ({ biometricEnabled: !state.biometricEnabled })),
        }),
        {
            name: 'photoclash-preferences',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);