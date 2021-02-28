import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import faker from 'faker';
import {
  LifeIsABeachTheme,
  MidnightLightsTheme,
  NeonLightsTheme,
  StartingTheme,
  SummerVibesTheme
} from 'styles/themes';
import { AppTheme, useAppTheme } from 'components/providers/Theme';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Field, Form } from 'components/base-components/Form';
import { TextArea } from 'components/base-components/Inputs';
import Button from 'components/base-components/Button';
import Toggle from 'components/base-components/Toggle';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import {
  NotificationDuration,
  NotificationType,
  showNotification,
} from 'components/experience/NotificationCenter';
import {
  ColorSample,
  DetailBox,
  Line,
  Palette,
  Settings as StyledSettings,
  SubTitle,
  Theme,
  ThemeName,
} from './styled';

const user = {
  userName: '@alejandro.yanes94',
  name: 'Alejandro Yanes',
  bio: faker.lorem.lines(4),
};

const Settings: FunctionComponent = () => {
  const {
    colors,
    theme: activeTheme,
    setTheme,
    useDarkStyle,
    toggleLightStyle,
  } = useAppTheme();

  const [userData, setUserData] = useState(user);

  const handleShowNotification = useCallback(() => {
    showNotification({
      type: NotificationType.ERROR,
      duration: NotificationDuration.INDEFINITE,
      id: faker.random.uuid(),
      message: faker.lorem.words(20),
    });
  }, []);

  const sunIcon = useMemo(() => (
    <SvgIcon icon={Icons.SUN} color={colors.GRAY_DARK} size="small" />
  ), [colors]);
  const moonIcon = useMemo(() => (
    <SvgIcon icon={Icons.MOON} color={colors.ACCENT_DARK} size="small" />
  ), [colors]);

  return (
    <StyledSettings>
      <SubTitle level={3} color="gray">Profile Data</SubTitle>
      <Form state={userData} onChange={setUserData}>
        <Field name="userName" label="User Name" />
        <Field name="name" label="Name" mT />
        <Field name="bio" component={TextArea} label="Bio" maxLength={250} autosize mT />
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
      <Button onClick={handleShowNotification} label="show notification" mT />
    </StyledSettings>
  );
};

export default Settings;
