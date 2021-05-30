import {
  DuskLightsTheme,
  FruitsTheme,
  GrapesTheme,
  LifeIsABeachTheme,
  NeonLightsTheme,
  SummerVibesTheme,
} from 'styles/themes';
import { AppTheme } from 'components/providers/Theme';

export const themes = [
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
