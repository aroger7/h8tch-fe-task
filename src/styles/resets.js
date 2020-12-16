import { css } from '@emotion/react';
import { colors } from 'styles';

export const resets = css`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 4.5rem;
  }

  input {
    background: ${colors.grayChateau};
    border: 4px solid ${colors.white};

    &:focus {
      outline: none;
      border-color: ${colors.casper};
    }
  }

  button {
    border: 4px solid ${colors.white};
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: ${colors.casper};
    }
  }
`;