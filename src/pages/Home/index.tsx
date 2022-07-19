import { useEffect, useId, useState } from 'react';
import { MagnifyingGlass, SmileySad } from 'phosphor-react';

import { Header } from '../../components/Header';

import {
  Container,
  CenterContainer,
  Form,
  Main,
  SectionFormSearch,
} from './styles';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { useModals } from '../../hooks/useModals';
import { api } from '../../configs/axios';
import { theme } from '../../styles/theme';

type UseFetchPosts = {
  title: string;
  image: string;
  id: string;
};

export function Home() {
  const { handleOpenModalEdit } = useModals();
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

  function handleChange(value: string) {
    if (!value) {
      setCards(initialCards);
    }

    const postsFiltereds = initialCards.filter(({ title }) =>
      title.toLowerCase().includes(value.toLowerCase()),
    );

    setCards(postsFiltereds);
  }

  return (
    <Container>
      <Header />
      <SectionFormSearch>
        <Form>
          <input
            type="text"
            placeholder="Digite aqui sua busca..."
            onChange={(e) => handleChange(e.target.value)}
          />
          <button>
            <MagnifyingGlass size={30} />
          </button>
        </Form>
      </SectionFormSearch>
      <Main>
        <section>
          <h1>Resultado da busca</h1>
          <Button variant="solid" onClick={handleOpenModalEdit}>
            Novo Card
          </Button>
        </section>
        <section className="main__container">
          {cards.length <= 0 && (
            <CenterContainer>
              <span>Infelizmente não temos cards</span>
              <SmileySad size={25} color={theme.colors.placeholderInput} />
            </CenterContainer>
          )}
          {isLoading && (
            <CenterContainer>
              <div className="centerContainer__spinner"></div>
            </CenterContainer>
          )}
          {isError && (
            <CenterContainer>
              <span>Infelizmente tivemos um erro</span>
              <SmileySad size={25} color={theme.colors.placeholderInput} />
            </CenterContainer>
          )}
          {cards.map((element) => (
            <Card
              key={element.id}
              id={element.id}
              imageUrl={element.image}
              alt={element.title}
              text={element.title}
            />
          ))}
        </section>
      </Main>
    </Container>
  );
}
