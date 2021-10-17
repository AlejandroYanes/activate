import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { elementHeight } from 'activate-components';

export const SettingItem = styled(Link)`
  text-decoration: none;
  border: none;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${elementHeight};
  padding: 4px 0;
  margin-bottom: 16px;
`;
