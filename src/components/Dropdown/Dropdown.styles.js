import styled from '@emotion/styled';
import { colors } from 'styles';

export const Dropdown = styled.div`
  position: relative;
  width: 100%;
  height: 4.5rem;
  background: ${colors.grayChateau};
  border: 4px solid ${colors.white};
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  color: ${colors.white};
  text-transform: uppercase;
  padding: 0;

  :focus-within {
    border-color: ${colors.casper};
  }
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: -4px;
  right: -4px;
  background: ${colors.white};
`;

export const OptionItem = styled.button`
  width: 100%;
  height: 4.5rem;
  background: none;
  border: none;
  text-align: left;
  text-transform: uppercase;
  padding: 0 1rem;
  font-weight: 500;
  color: ${colors.raven};
  border-bottom: 2px solid ${colors.raven};

  &:focus {
    border-top: none;
    border-left: none;
    border-right: none;
  }

  &:hover {
    color: ${colors.mako};
  }
`;

export const TriggerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: ${colors.white};
  text-transform: uppercase;
  padding: 2rem 1rem;

  &:focus {
    outline: none;
  }
`;

export const SelectedOptionText = styled.p`
  color: ${({ isPlaceholder }) => isPlaceholder ? colors.white : colors.iron};
`;
