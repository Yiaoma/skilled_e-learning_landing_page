import styled from 'styled-components';
import { Img, Button } from 'components/common';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const StyledLogo = styled(Img)``;

export const StyledButton = styled(Button)`
  width: 167px;
  height: 56px;
  border: none;
  border-radius: 28px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  line-height: ${({ theme }) => theme.lineHeights.small};
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.blue}, ${theme.colors.violet})`};

  &:hover {
    cursor: pointer;
  }
`;
