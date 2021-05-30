import React, { FunctionComponent } from 'react';
import { AppTheme } from 'components/providers/Theme';
import { PositionProps } from 'helpers';
import { PickList, PickItem } from 'components/base-components/PickList';
import { Theme, Palette, ColorSample, DetailBox, ThemeName } from './styled';

interface Props extends PositionProps {
  cols?: number;
  themes: {
    name: string,
    value: AppTheme,
    theme: any,
  }[]
  activeTheme: AppTheme;
  onChange: (nextTheme: AppTheme) => void,
}

const ThemesGrid: FunctionComponent<Props> = (props) => {
  const { cols, themes, activeTheme, onChange, ...rest } = props;

  const themeElements = themes.map(({ value, theme, name }) => (
    <PickItem key={value} value={value}>
      <Theme>
        <Palette>
          <ColorSample color={theme.BRAND} />
          <ColorSample color={theme.ACCENT} />
        </Palette>
        <DetailBox>
          <ThemeName>{name}</ThemeName>
        </DetailBox>
      </Theme>
    </PickItem>
  ));

  return (
    <PickList
      cols={cols}
      layout="grid"
      color="brand"
      value={activeTheme}
      onChange={onChange}
      {...rest}
    >
      {themeElements}
    </PickList>
  );
};

export default ThemesGrid;
