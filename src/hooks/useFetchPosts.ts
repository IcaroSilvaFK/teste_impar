import { useEffect, useState } from 'react';
import { api } from '../configs/axios';
import { useModals } from './useModals';

type UseFetchPosts = {
  title: string;
  image: string;
  id: string;
};

export function useFetchPosts() {
  const [posts, setPosts] = useState<UseFetchPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { refetch, setRefetch } = useModals();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      if (!refetch) return;
      try {
        const { data } = await api.get('cards');
        setPosts(data);
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
        setPosts(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    })();
    setRefetch(false);
  }, [refetch]);

  return {
    posts,
    isLoading,
    isError,
  };
}
