import styled from 'styled-components';
import Colors from 'styles/colors';

export const PublisherCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${Colors.WHITE};
  border-radius: 10px;
  margin-bottom: 32px;
  width: 600px;
  min-width: 450px;
  border: 1px solid ${Colors.BRAND_SHADE};
  transition: all 150ms linear;

  &:hover {
    box-shadow: 0 0 1px 1px ${Colors.BRAND_SHADE};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: auto;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const Name = styled.h3`
  color: ${Colors.DARK};
  font-weight: bold;
  font-size: 16px;
  padding: 0;
  margin: 0 0 16px 0;
`;

export const Description = styled.p`
  color: ${Colors.DARK};
  font-size: 14px;
  line-height: 18px;
  padding: 0;
  margin: 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const Extras = styled.div`
  display: flex;
  align-items: center;
`;

export const Stat = styled.div.attrs((props: any) => props)`
  display: flex;
  align-items: center;

  & > span {
    color: ${Colors.GRAY};
    font-size: 13px;
    margin-left: 8px;
  }
`;

export const Actions = styled.div``;