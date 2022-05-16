import { Icon } from 'components';
import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  width: 344px;
  height: 259px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledIcon = styled(Icon)`
  width: 56px;
  height: 56px;
  position: absolute;
  top: -28px;
  left: 28px;
`;
