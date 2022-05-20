import styled from 'styled-components';
import { H1, P, Button, Img } from 'components/common';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px 56px;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;
  margin-bottom: 46px;
`;

export const StyledH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: ${({ theme }) => theme.lineHeights.large};
  font-weight: ${({ theme }) => theme.fontWeights.xBold};
`;

export const StyledP = styled(P)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xxSmall};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;

export const StyledButton = styled(Button)`
  width: 167px;
  height: 63px;
  border: none;
  border-radius: 31.5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.small};
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.orange}, ${theme.colors.violet})`};

  &:hover {
    cursor: pointer;
    opacity: 50%;
  }
`;

export const StyledImg = styled(Img)``;
