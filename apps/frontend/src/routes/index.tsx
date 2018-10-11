import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { Flex } from 'grid-styled';

import Home from './Home';

const Routes: React.SFC<any> = () => {
  return (
    <Wrapper flexDirection="column">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  height: 100%;
  min-width: 100%;
`;

export default Routes;
