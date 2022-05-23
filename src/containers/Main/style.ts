import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 42px;
  padding: 16px 16px 58px;

  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-around;
  }
`;
