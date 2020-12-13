import React from 'react';
import { Global } from '@emotion/react';
import ItemsManager from 'components/ItemsManager';
import Intro from 'components/Intro';
import { ItemsProvider } from 'providers/ItemsProvider';
import { resets, fonts } from 'styles';
import * as Styled from './App.styles';

const App = () => {
  return (
    <Styled.App>
      <Global styles={resets} />
      <Global styles={fonts} />
      <Styled.AppBody>
        <Intro />
        <ItemsProvider>
          <ItemsManager />
        </ItemsProvider>
      </Styled.AppBody>
    </Styled.App>
  );
}

export default App;