import React, { FunctionComponent, useMemo, useState } from 'react';
import { NeonLightsTheme, StartingTheme, SummerVibesTheme } from 'styles/themes';
import { AppTheme, useAppTheme } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { PickItem, PickList } from 'components/base-components/PickList';
import Page from 'components/base-components/Page';
import Toggle from 'components/base-components/Toggle';
import ProfileData from './ProfileData';
import {
  Block,
  ColorSample,
  DetailBox,
  Palette,
  Settings,
  SubTitle,
  Theme,
  ThemeName,
} from './styled';

export enum ProfileTabs {
  Following = 'Following',
  Friends = 'Friends',
  Setting = 'Settings',
}

const ProfilePage: FunctionComponent = () => {
  const {
    colors,
    theme: activeTheme,
    setTheme,
    useDarkStyle,
    toggleLightStyle,
  } = useAppTheme();
  const [activeTab, setActiveTab] = useState(ProfileTabs.Setting);

  const sunIcon = useMemo(() => (
    <SvgIcon icon={Icons.SUN} color={colors.GRAY_DARK} size="small" />
  ), [colors]);
  const moonIcon = useMemo(() => (
    <SvgIcon icon={Icons.MOON} color={colors.ACCENT_DARK} size="small" />
  ), [colors]);

  return (
    <Page>
      <ProfileData activeTab={activeTab} setActiveTab={setActiveTab} />
      <Settings>
        <SubTitle level={3} color="gray">Theme</SubTitle>
        <PickList value={activeTheme} onChange={setTheme} color="info">
          <PickItem value={AppTheme.Default}>
            <Theme>
              <Palette>
                <ColorSample color={StartingTheme.BRAND} />
                <ColorSample color={StartingTheme.ACCENT} />
              </Palette>
              <DetailBox>
                <ThemeName>Activate</ThemeName>
              </DetailBox>
            </Theme>
          </PickItem>
          <PickItem value={AppTheme.NeonLights}>
            <Theme>
              <Palette>
                <ColorSample color={NeonLightsTheme.BRAND} />
                <ColorSample color={NeonLightsTheme.ACCENT} />
              </Palette>
              <DetailBox>
                <ThemeName>Neon Lights</ThemeName>
              </DetailBox>
            </Theme>
          </PickItem>
          <PickItem value={AppTheme.SummerVibes}>
            <Theme>
              <Palette>
                <ColorSample color={SummerVibesTheme.BRAND} />
                <ColorSample color={SummerVibesTheme.ACCENT} />
              </Palette>
              <DetailBox>
                <ThemeName>Summer Vibes</ThemeName>
              </DetailBox>
            </Theme>
          </PickItem>
        </PickList>
        <Block>
          <Toggle
            nobNode={useDarkStyle ? moonIcon : sunIcon}
            label="Use Dark Style"
            value={useDarkStyle}
            onChange={toggleLightStyle}
          />
        </Block>
      </Settings>
    </Page>
  );
};

export default ProfilePage;
