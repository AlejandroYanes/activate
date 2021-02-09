import React, { FunctionComponent, useMemo, useState } from 'react';
import * as faker from 'faker';
import {
  NeonLightsTheme,
  StartingTheme,
  SummerVibesTheme,
  MidnightLightsTheme,
  LifeIsABeachTheme,
} from 'styles/themes';
import { AppTheme, useAppTheme } from 'components/providers/Theme';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Field, Form } from 'components/base-components/Form';
import { TextArea } from 'components/base-components/Inputs';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Page from 'components/base-components/Page';
import Toggle from 'components/base-components/Toggle';
import Button from 'components/base-components/Button';
import ProfileData from './ProfileData';
import {
  Line,
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

const user = {
  userName: '@alejandro.yanes94',
  name: 'Alejandro Yanes',
  bio: faker.lorem.lines(4),
};

const ProfilePage: FunctionComponent = () => {
  const {
    colors,
    theme: activeTheme,
    setTheme,
    useDarkStyle,
    toggleLightStyle,
  } = useAppTheme();

  const [activeTab, setActiveTab] = useState(ProfileTabs.Setting);
  const [userData, setUserData] = useState(user);

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
        <SubTitle level={3} color="gray">Profile Data</SubTitle>
        <Form state={userData} onChange={setUserData}>
          <Field name="userName" label="User Name" />
          <Field name="name" label="Name" mT />
          <Field name="bio" component={TextArea} label="Bio" mT />
        </Form>
        <Line floatRight>
          <Button onClick={() => undefined} label="Update" mB />
        </Line>
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
          <PickItem value={AppTheme.MidnightLights}>
            <Theme>
              <Palette>
                <ColorSample color={MidnightLightsTheme.BRAND} />
                <ColorSample color={MidnightLightsTheme.ACCENT} />
              </Palette>
              <DetailBox>
                <ThemeName>Midnight Lights</ThemeName>
              </DetailBox>
            </Theme>
          </PickItem>
          <PickItem value={AppTheme.LifeIsABeach}>
            <Theme>
              <Palette>
                <ColorSample color={LifeIsABeachTheme.BRAND} />
                <ColorSample color={LifeIsABeachTheme.ACCENT} />
              </Palette>
              <DetailBox>
                <ThemeName>Life is a Beach</ThemeName>
              </DetailBox>
            </Theme>
          </PickItem>
        </PickList>
        <Line>
          <Toggle
            nobNode={useDarkStyle ? moonIcon : sunIcon}
            label="Use Dark Style"
            value={useDarkStyle}
            onChange={toggleLightStyle}
          />
        </Line>
      </Settings>
    </Page>
  );
};

export default ProfilePage;
