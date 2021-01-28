import React, { FunctionComponent, useCallback, useState } from 'react';
import { CheckboxToggle } from 'react-rainbow-components';
import { NeonLightsTheme, StartingTheme, SummerVibesTheme } from 'styles/themes';
import { AppTheme, useAppTheme } from 'components/providers/Theme';
import Page from 'components/base-components/Page';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import { Tab, Tabset } from 'components/base-components/Tabset';
import {
  Actions,
  ProfileData,
  Stat,
  StatName,
  Stats,
  StatValue,
  StyledAvatar,
  UserName,
  Settings,
  SubTitle,
  ThemeList,
  Theme,
  Palette,
  ColorSample,
  DetailBox,
  ThemeName,
  Block,
} from './styled';

enum Tabs {
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
  const [activeTab, setActiveTab] = useState(Tabs.Setting);

  const handleThemeChange = useCallback((event) => {
    const { theme } = event.target.dataset;
    setTheme(theme);
  }, [setTheme]);

  return (
    <Page>
      <ProfileData>
        <StyledAvatar size="x-large" icon="user10" />
        <Actions>
          <IconButton
            onClick={() => undefined}
            icon={Icons.CREATE_PENCIL}
            color={colors.FONT}
          />
        </Actions>
        <UserName>Alejandro Yanes</UserName>
        <Stats>
          <Stat>
            <StatName>Attended</StatName>
            <StatValue>120</StatValue>
          </Stat>
          <Stat>
            <StatName>Following</StatName>
            <StatValue>60</StatValue>
          </Stat>
          <Stat>
            <StatName>Friends</StatName>
            <StatValue>80</StatValue>
          </Stat>
        </Stats>
        <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth mT>
          <Tab name={Tabs.Following} label={Tabs.Following} />
          <Tab name={Tabs.Friends} label={Tabs.Friends} />
          <Tab name={Tabs.Setting} label={Tabs.Setting} />
        </Tabset>
      </ProfileData>
      <Settings>
        <SubTitle>Theme</SubTitle>
        <ThemeList>
          <Theme data-theme={AppTheme.Default} onClick={handleThemeChange}>
            <Palette>
              <ColorSample color={StartingTheme.BRAND} />
              <ColorSample color={StartingTheme.ACCENT} />
            </Palette>
            <DetailBox>
              <ThemeName>Activate</ThemeName>
              <RenderIf condition={activeTheme === AppTheme.Default}>
                <SvgIcon icon={Icons.CHECK_MARK} color={colors.ACCENT} />
              </RenderIf>
            </DetailBox>
          </Theme>
          <Theme data-theme={AppTheme.NeonLights} onClick={handleThemeChange}>
            <Palette>
              <ColorSample color={NeonLightsTheme.BRAND} />
              <ColorSample color={NeonLightsTheme.ACCENT} />
            </Palette>
            <DetailBox>
              <ThemeName>Neon Lights</ThemeName>
              <RenderIf condition={activeTheme === AppTheme.NeonLights}>
                <SvgIcon icon={Icons.CHECK_MARK} color={colors.ACCENT} />
              </RenderIf>
            </DetailBox>
          </Theme>
          <Theme data-theme={AppTheme.SummerVibes} onClick={handleThemeChange}>
            <Palette>
              <ColorSample color={SummerVibesTheme.BRAND} />
              <ColorSample color={SummerVibesTheme.ACCENT} />
            </Palette>
            <DetailBox>
              <ThemeName>Summer Vibes</ThemeName>
              <RenderIf condition={activeTheme === AppTheme.SummerVibes}>
                <SvgIcon icon={Icons.CHECK_MARK} color={colors.ACCENT} />
              </RenderIf>
            </DetailBox>
          </Theme>
        </ThemeList>
        <Block>
          <CheckboxToggle
            label="Use Dark Theme"
            value={useDarkStyle}
            onClick={toggleLightStyle}
          />
        </Block>
      </Settings>
    </Page>
  );
};

export default ProfilePage;
