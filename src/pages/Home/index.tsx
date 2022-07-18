import { useEffect, useId, useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import { Header } from '../../components/Header';

import { Container, Form, Main, SectionFormSearch } from './styles';
import { theme } from '../../styles/theme';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { useFetchPosts } from '../../hooks/useFetchPosts';

export function Home() {
  const { isError, isLoading, posts } = useFetchPosts();

  return (
    <Container>
      <Header />
      <SectionFormSearch>
        <Form>
          <input type="text" placeholder="Digite aqui sua busca..." />
          <button>
            <MagnifyingGlass size={30} />
          </button>
        </Form>
      </SectionFormSearch>
      <Main>
        <section>
          <h1>Resultado da busca</h1>
          <Button>Novo Card</Button>
        </section>
        <section className="main__container">
          {posts.map((element) => (
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
