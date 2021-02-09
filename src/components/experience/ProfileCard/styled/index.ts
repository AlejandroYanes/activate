import styled from 'styled-components';
import Avatar from 'components/base-components/Avatar';

export const Card = styled.div`
  position: relative;
  border-radius: 16px;
  padding: 84px 16px 24px;
  margin-top: 43px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const StyledAvatar = styled(Avatar)`
  position: absolute;
  top: -43px;
  left: 50%;
  margin: 0 auto 0 -43px;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Attr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

export const Actions = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
