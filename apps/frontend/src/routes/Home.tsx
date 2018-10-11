import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const Home: React.SFC = () => {
  return (
    <Styles alignItems="center" justifyContent="center" flexDirection="row">
      Home
      </Styles>
  );
}

const Styles = styled<any>(Flex)`
  position: relative;
  overflow: hidden;
  height: 100%;
`;

export default Home;
