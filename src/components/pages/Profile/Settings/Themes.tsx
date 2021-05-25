import React, { FunctionComponent } from 'react';
import {
  DuskLightsTheme,
  GrapesTheme,
  LifeIsABeachTheme,
  NeonLightsTheme,
  FruitsTheme,
  SummerVibesTheme,
} from 'styles/themes';
import { AppTheme } from 'components/providers/Theme';
import { PickItem } from 'components/base-components/PickList';
import { ColorSample, DetailBox, Palette, Theme, ThemeName } from './styled';

const themes = [
  {
    name: 'Summer Vibes',
    value: AppTheme.SummerVibes,
    theme: SummerVibesTheme,
  },
  {
    name: 'Grapes',
    value: AppTheme.Grapes,
    theme: GrapesTheme,
  },
  {
    name: 'Neon Lights',
    value: AppTheme.NeonLights,
    theme: NeonLightsTheme,
  },
  {
    name: 'Dusk Lights',
    value: AppTheme.DuskLights,
    theme: DuskLightsTheme,
  },
  {
    name: 'Life is a Beach',
    value: AppTheme.LifeIsABeach,
    theme: LifeIsABeachTheme,
  },
  {
    name: 'Fruits',
    value: AppTheme.Fruits,
    theme: FruitsTheme,
  },
];

const Themes: FunctionComponent = (): any => {
  return themes.map(({ value, theme, name }) => (
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
};

export default Themes;
