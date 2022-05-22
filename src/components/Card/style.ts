import styled from 'styled-components';
import { Img, H3, P, A } from 'components/common';

export const StyledCard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 32px 16px;
`;

export const StyledIcon = styled(Img)`
  width: 56px;
  height: 56px;
  position: absolute;
  left: 16px;
  top: -28px;
`;

export const StyledH3 = styled(H3)`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.small};
  font-weight: ${({ theme }) => theme.fontWeights.xBold};
`;

export const StyledP = styled(P)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xxSmall};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.small};
  margin: 16px 0 24px;
`;

export const StyledA = styled(A)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.violet};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;
