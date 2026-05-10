import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppState {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    myUploads: string[];
    addUpload: (imageUri: string) => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            login: () => set({ isAuthenticated: true }),
            logout: () => set({ isAuthenticated: false }),

            myUploads: [],
            addUpload: (imageUri) => set((state) => ({
                myUploads: [imageUri, ...state.myUploads]
            })),
        }),
        {
            name: 'photoclash-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);