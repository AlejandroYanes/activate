import React, { FunctionComponent } from 'react';
import { PickItem, PickList, PositionProps } from 'activate-components';
import { AppTheme } from 'components/providers/Theme';
import { ColorSample, Palette, Theme } from './styled';

interface Props extends PositionProps {
  cols?: number;
  themes: {
    name: string;
    value: AppTheme;
    theme: any;
  }[];
  activeTheme: AppTheme;
  onChange: (nextTheme: AppTheme) => void;
}

const ThemesGrid: FunctionComponent<Props> = (props) => {
  const { cols, themes, activeTheme, onChange, ...rest } = props;

  const themeElements = themes.map(({ value, theme }) => (
    <PickItem key={value} value={value}>
      <Theme>
        <Palette>
          <ColorSample color={theme.BRAND} />
          <ColorSample color={theme.ACCENT} />
        </Palette>
      </Theme>
    </PickItem>
  ));

  return (
    <PickList
      cols={cols}
      layout="grid"
      color="brand"
      flatMarker
      value={activeTheme}
      onChange={onChange}
      {...rest}
    >
      {themeElements}
    </PickList>
  );
};

export default ThemesGrid;
