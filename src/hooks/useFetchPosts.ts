import { useEffect, useState } from 'react';

import { api } from '../configs/axios';
import { useModals } from './useModals';

type UseFetchPosts = {
  title: string;
  image: string;
  id: string;
};

export function useFetchPosts() {
  const [initialCards, setInitialCards] = useState<UseFetchPosts[]>([]);
  const [cards, setCards] = useState<UseFetchPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { refetch, setRefetch } = useModals();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      if (!refetch) return;
      try {
        const { data } = await api.get<UseFetchPosts[]>('cards');
        setCards(data);
        setInitialCards(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const { data } = await api.get('cards');
        setInitialCards(data);
        setCards(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    })();
    setRefetch(false);
  }, [refetch]);

  return {
    cards,
    isLoading,
    isError,
    setCards,
    initialCards,
  };
}
