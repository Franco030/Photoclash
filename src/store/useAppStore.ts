import { create } from 'zustand';

interface AppState {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    myUploads: string[];
    addUpload: (imageUri: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),

    myUploads: [],
    addUpload: (imageUri) => set((state) => ({
        myUploads: [imageUri, ...state.myUploads]
    })),
}));