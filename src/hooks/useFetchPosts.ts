import { useEffect, useState } from 'react';
import { api } from '../configs/axios';

type UseFetchPosts = {
  title: string;
  image: string;
  id: string;
};

export function useFetchPosts() {
  const [posts, setPosts] = useState<UseFetchPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
  }, []);

  return {
    posts,
    isLoading,
    isError,
  };
}
