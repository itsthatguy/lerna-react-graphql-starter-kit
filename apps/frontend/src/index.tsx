import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';
import styleGlobals from 'styles/global';

const rootEl = document.getElementById('root');

declare var module;

const render = Component => {
  styleGlobals();

  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;
    return render(NextRoot);
  });
}
