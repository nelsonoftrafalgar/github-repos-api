import './App.css';

import Container from './containers/Container/Container'
import Head from './containers/Head/Head'
import React from 'react'
import Search from './containers/Search/Search'

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Head />
        <Search />
      </Container>
    </>
  );
}

export default App
