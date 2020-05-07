import * as React from 'react';
import UsersComponent from './home';
import Header from '../components/header/Header';
import AccountFormComponent from './account';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => (
    <Container>
      {/*<Header/>*/}
      {/*  <UsersComponent />*/}
        <AccountFormComponent/>
    </Container>
);

export default App;