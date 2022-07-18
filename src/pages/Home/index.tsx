import { useId } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import { Header } from '../../components/Header';

import { Container, Form, SectionFormSearch } from './styles';
import { theme } from '../../styles/theme';

export function Home() {
  const inputId = useId();

  return (
    <Container>
      <Header />
      <SectionFormSearch>
        <Form>
          <label htmlFor={inputId}>
            <input
              type="text"
              id={inputId}
              placeholder="Digite aqui sua busca"
            />
          </label>
          <button>
            <MagnifyingGlass size={30} />
          </button>
        </Form>
      </SectionFormSearch>
    </Container>
  );
}
