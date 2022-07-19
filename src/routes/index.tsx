import { BrowserRouter, Routes as Rotuer, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

export function Routes() {
  return (
    <BrowserRouter>
      <Rotuer>
        <Route path="/" element={<Home />} />
      </Rotuer>
    </BrowserRouter>
  );
}
