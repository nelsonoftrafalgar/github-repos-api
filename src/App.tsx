import './App.css';

import Container from './containers/Container/Container'
import Head from './containers/Head/Head'
import React from 'react'

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Head />
      </Container>
    </>
  );
}

export default App
