import React from 'react';
import { Global } from '@emotion/react';
import Intro from 'components/Intro';
import { resets, fonts } from 'styles';
import * as Styled from './App.styles';

const App = () => {
  return (
    <Styled.App>
      <Global styles={resets} />
      <Global styles={fonts} />
      <Intro />
    </Styled.App>
  );
}

export default App;