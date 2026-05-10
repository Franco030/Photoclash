export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    createdAt: string;
}

export interface AppPreference {
    id: string;
    userId: string;
    theme: 'light' | 'dark' | 'pastel';
    fontFamily: 'default' | 'serif' | 'mono';
    biometricEnabled: boolean;
}

export interface Photo {
    id: string;
    userId: string;
    localUri: string;
    title?: string;
    addedAt: string;
}

export interface Tournament {
    id: string;
    userId: string;
    title: string;
    size: number;
    status: 'pending' | 'in_progress' | 'completed';
    winnerPhotoId?: string;
    createdAt: string;
}

export interface Collage {
    id: string;
    userId: string;
    tournamentId: string;
    photoIds: string[];
    layoutType: string;
    createdAt: string;
}