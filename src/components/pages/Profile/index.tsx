import React, { FunctionComponent, useState } from 'react';
import { NeonLightsTheme, StartingTheme, SummerVibesTheme } from 'styles/themes';
import { AppTheme, useAppTheme } from 'components/providers/Theme';
import Page from 'components/base-components/Page';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { PickItem, PickList } from 'components/base-components/PickList';
import IconButton from 'components/base-components/IconButton';
import Toggle from 'components/base-components/Toggle';
import {
  Actions,
  Block,
  ColorSample,
  Complement,
  DetailBox,
  Palette,
  ProfileData,
  Settings,
  Stat,
  StatName,
  Stats,
  StatValue,
  StyledAvatar,
  SubTitle,
  Theme,
  ThemeName,
  UserName,
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

  return (
    <Page>
      <ProfileData>
        <StyledAvatar size="x-large" icon="user10" />
        <Actions>
          <IconButton
            onClick={() => undefined}
            icon={Icons.CREATE_PENCIL}
            color={colors.FONT}
            variant="flat"
          />
        </Actions>
        <UserName>Alejandro Yanes</UserName>
        <Complement>
          <span>alejandro.yanes49@gmail.com</span>
          <span>+53 58207203</span>
        </Complement>
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
          <Tab name={Tabs.Following} label={Tabs.Following} icon={Icons.MEGAPHONE} />
          <Tab name={Tabs.Friends} label={Tabs.Friends} icon={Icons.USERS} />
          <Tab name={Tabs.Setting} label={Tabs.Setting} icon={Icons.SETTINGS} />
        </Tabset>
      </ProfileData>
      <Settings>
        <SubTitle>Theme</SubTitle>
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
