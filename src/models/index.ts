export interface User {
    id: string;
    username: string;
    avatarUrl?: string;
    winRate: number;
}

export interface PhotoEntry {
    id: string;
    authorId: string;
    imageUrl: string;
    votes: number;
    submittedAt: string;
}

export interface Tournament {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'voting' | 'closed';
    participantsCount: number;
    coverImageUrl: string;
    entries?: PhotoEntry[];
    createdAt: string;
    endDate: string;
}