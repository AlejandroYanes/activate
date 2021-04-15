import React, { FunctionComponent, useMemo, useState } from 'react';
import faker from 'faker';
import {
  DuskLightsTheme,
  LifeIsABeachTheme,
  NeonLightsTheme,
  GrapesTheme,
  SummerVibesTheme,
} from 'styles/themes';
import { AppTheme, useAppTheme } from 'components/providers/Theme';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Field, Form } from 'components/base-components/Form';
import { TextArea } from 'components/base-components/Inputs';
import Button from 'components/base-components/Button';
import Toggle from 'components/base-components/Toggle';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Title } from 'components/base-components/Typography';
import {
  ColorSample,
  DetailBox,
  Line,
  Palette,
  StyledSettings,
  Theme,
  ThemeName,
} from './styled';

interface Props {
  asPanel?: boolean;
}

const user = {
  userName: '@alejandro.yanes94',
  name: 'Alejandro Yanes',
  bio: faker.lorem.lines(4),
};

const emptyAction = () => undefined;

const Settings: FunctionComponent<Props> = (props) => {
  const {
    colors,
    theme: activeTheme,
    setTheme,
    useDarkStyle,
    toggleLightStyle,
  } = useAppTheme();
  const { asPanel } = props;

  const [userData, setUserData] = useState(user);

  const sunIcon = useMemo(() => (
    <SvgIcon icon={Icons.SUN} color={colors.GRAY_DARK} size="small" />
  ), [colors]);
  const moonIcon = useMemo(() => (
    <SvgIcon icon={Icons.MOON} color={colors.ACCENT_HIGHLIGHT} size="small" />
  ), [colors]);

  return (
    <StyledSettings asPanel={asPanel}>
      <Title level={3} color="secondary" margin="0 0 24px">Profile Data</Title>
      <Form state={userData} onChange={setUserData}>
        <Field name="userName" label="User Name" />
        <Field name="name" label="Name" mT />
        <Field
          name="bio"
          label="Bio"
          component={TextArea}
          maxLength={250}
          autosize
          mT
        />
      </Form>
      <Button
        onClick={emptyAction}
        label="Update"
        variant="flat"
        margin="24px 0 24px auto"
      />
      <Title level={3} color="secondary" margin="0 0 24px">Theme</Title>
      <PickList value={activeTheme} onChange={setTheme} color="info">
        <PickItem value={AppTheme.Grapes}>
          <Theme>
            <Palette>
              <ColorSample color={GrapesTheme.BRAND} />
              <ColorSample color={GrapesTheme.ACCENT} />
            </Palette>
            <DetailBox>
              <ThemeName>Grapes</ThemeName>
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
        <PickItem value={AppTheme.DuskLights}>
          <Theme>
            <Palette>
              <ColorSample color={DuskLightsTheme.BRAND} />
              <ColorSample color={DuskLightsTheme.ACCENT} />
            </Palette>
            <DetailBox>
              <ThemeName>Dusk Lights</ThemeName>
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
    </StyledSettings>
  );
};

export default Settings;
