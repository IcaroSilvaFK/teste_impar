import { MagnifyingGlass, SmileySad } from 'phosphor-react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { useFetchPosts } from '../../hooks/useFetchPosts';
import { useModals } from '../../hooks/useModals';
import { theme } from '../../styles/theme';

import {
  CenterContainer,
  Container,
  Form,
  Main,
  SectionFormSearch,
} from './styles';

export function Home() {
  const { handleOpenModalEdit } = useModals();

  const { cards, initialCards, isError, isLoading, setCards } = useFetchPosts();

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
            data-cy="input-search"
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
          {cards.length <= 0 && (
            <CenterContainer>
              <span>Infelizmente não temos cards</span>
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
