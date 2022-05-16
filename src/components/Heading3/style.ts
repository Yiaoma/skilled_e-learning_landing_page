import styled from 'styled-components';

export const StyledHeading3 = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.xBold};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;
