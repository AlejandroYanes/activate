import styled from 'styled-components';
import Avatar from 'components/base-components/Avatar';

export const ProfileData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px;
  margin-top: 43px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const Actions = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const StyledAvatar = styled(Avatar)`
  position: absolute;
  top: -43px;
  left: 50%;
  margin: 0 auto 0 -43px;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.colors.BACKGROUND};
`;

export const UserName = styled.h2`
  margin-top: 54px;
  margin-bottom: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.BRAND};
`;

export const Complement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.FONT};

  & span:first-child {
    margin-bottom: 4px;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatName = styled.span`
  margin-bottom: 0;
`;

export const StatValue = styled.h2`
  color: ${({ theme }) => theme.colors.BRAND};
`;
