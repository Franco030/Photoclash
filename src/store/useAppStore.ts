import { create } from 'zustand';

interface AppState {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}));