import './App.css';

import Container from './containers/Container/Container'
import Head from './containers/Head/Head'
import List from './containers/List/List'
import React from 'react'
import Search from './containers/Search/Search'

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Head />
        <Search />
        <List />
      </Container>
    </>
  );
}

export default App
