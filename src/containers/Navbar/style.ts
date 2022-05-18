import styled from 'styled-components';
import { Button, Img } from 'components/common';
import { Nav } from 'components/layout';

export const StyledNav = styled(Nav)`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled(Img)``;

export const StyledButton = styled(Button)`
  width: 167px;
  height: 56px;
  border: none;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;
