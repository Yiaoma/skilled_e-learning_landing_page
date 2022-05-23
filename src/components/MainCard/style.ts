import styled from 'styled-components';
import { H2 } from 'components/common';

export const StyledMainCard = styled.div`
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.orange}, ${theme.colors.violet})`};
  border-radius: 10px;
  padding: 32px 16px;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const StyledH2 = styled(H2)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.xBold};
  line-height: ${({ theme }) => theme.lineHeights.medium};
`;
