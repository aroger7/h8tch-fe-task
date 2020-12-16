import styled from '@emotion/styled';

export const ItemsManager = styled.div`
  width: 100%;
`;

export const BodyContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  @media screen and (max-width: 48em) {
    flex-direction: column;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 17.5rem;
  min-width: 0;
  margin-right: 1rem;

  @media screen and (max-width: 48em) {
    flex-basis: auto;
    margin-right: 0;
  }
`;

export const ControlsContainerSection = styled.div`
  flex: 0;
`;

export const ItemInputContainer = styled.div`
  margin-bottom: 1rem;
`;

export const ColumnDropdownContainer = styled.div`
  @media screen and (max-width: 48em) {
    margin-bottom: 1rem;
  }
`;

export const AddItemButtonContainer = styled.div`
  margin-bottom: 3rem;
`;

export const ItemSearchContainer = styled.div`
  margin: 0;

  @media screen and (max-width: 48em) {
    margin-bottom: 1rem;
  }
`;

export const ColumnsContainer = styled.div`
  flex: 1;
  min-width: 0;
`;