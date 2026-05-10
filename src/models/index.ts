export interface User {
    id: string;
    username: string;
    avatarUrl?: string;
    title: string;
    score: number;
    winRate: number;
}

export interface PhotoEntry {
    id: string;
    authorId: string;
    tournamentId: string;
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