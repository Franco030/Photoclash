import { useState, useCallback } from 'react';
import { Tournament } from '../models';
import { api } from '../services/api';

export const useTournamentsViewModel = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTournaments = useCallback(async (userId: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await api.get<Tournament[]>(`/tournaments?userId=${userId}`);
            setTournaments(response.data);
        } catch (err: any) {
            setError(err.message || 'Error al obtener los torneos');

            setTournaments([
                { id: '1', userId, title: 'Favoritas 2023', size: 16, status: 'completed', createdAt: new Date().toISOString() }
            ]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const createTournament = async (newTournament: Omit<Tournament, 'id' | 'createdAt'>) => {
        setIsLoading(true);
        try {
            const response = await api.post<Tournament>('/tournaments', newTournament);
            setTournaments((prev) => [...prev, response.data]);
            return response.data;
        } catch (err: any) {
            setError(err.message || 'Error al crear el torneo');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        tournaments,
        isLoading,
        error,
        fetchTournaments,
        createTournament,
    };
};