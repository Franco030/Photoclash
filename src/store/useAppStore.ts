import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PhotoEntry } from '../models';

interface AppState {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    myUploads: PhotoEntry[];
    addUpload: (imageUri: string) => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            login: () => set({ isAuthenticated: true }),
            logout: () => set({ isAuthenticated: false }),

            myUploads: [],
            addUpload: (imageUri) => set((state) => {
                const newEntry: PhotoEntry = {
                    id: Math.random().toString(),
                    authorId: 'me',
                    imageUrl: imageUri,
                    votes: 0,
                    submittedAt: new Date().toISOString(),
                };
                return { myUploads: [newEntry, ...state.myUploads] };
            }),
        }),
        {
            name: 'photoclash-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({ myUploads: state.myUploads }),
        }
    )
);