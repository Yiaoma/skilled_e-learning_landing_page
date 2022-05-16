import styled from 'styled-components';

export const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.colors.darkPink};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  line-height: ${({ theme }) => theme.lineHeights.small};

  &:hover {
    color: ${({ theme }) => theme.colors.lightPink};
  }
`;
