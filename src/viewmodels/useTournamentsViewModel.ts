import { useState, useEffect } from 'react';
import { Tournament } from '../models';

export const useTournamentsViewModel = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTournaments = async () => {
        try {
            setIsLoading(true);
            setError(null);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            const mockData: Tournament[] = [
                {
                    id: '1', title: 'Atardeceres de la Ciudad', description: 'Captura la esencia del crepúsculo.',
                    status: 'active', participantsCount: 124,
                    coverImageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
                    createdAt: new Date().toISOString(), endDate: new Date().toISOString()
                },
                {
                    id: '2', title: 'Arquitectura Brutalista', description: 'El concreto en su máxima expresión.',
                    status: 'active', participantsCount: 89,
                    coverImageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
                    createdAt: new Date().toISOString(), endDate: new Date().toISOString()
                },
            ];

            setTournaments(mockData);
        } catch (err) {
            setError('Error al cargar los torneos. Intenta de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTournaments();
    }, []);

    return {
        tournaments,
        isLoading,
        error,
        refreshTournaments: fetchTournaments
    };
};