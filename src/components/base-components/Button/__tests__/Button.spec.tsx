import React from 'react';
import { mount } from 'enzyme';
import Button from 'components/base-components/Button';
import SvgIcon from 'components/base-components/SvgIcon';
import { Icons } from 'components/base-components/SvgIcon/Icons';

const onClickMock = jest.fn();

describe('Button base component', () => {
  beforeAll(() => {
    onClickMock.mockClear();
  });

  it('should render the label and icons passed', () => {
    const rightIcon = <SvgIcon icon={Icons.HEART_FILLED} />;
    const leftIcon = <SvgIcon icon={Icons.BELL} />;
    const button = mount(
      <Button
        onClick={onClickMock}
        label="button 1"
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      />,
    );

    button.simulate('click');

    expect(button.text()).toBe('button 1');
    expect(button.find(SvgIcon).length).toBe(2);
    expect(onClickMock).toBeCalled();
  });

  it('should show the is loading text', () => {
    const button = mount(
      <Button
        onClick={onClickMock}
        label="button 1"
        isLoading
      />,
    );

    expect(button.text()).toBe('is loading');
  });

  it('should return the content passed as children over the one generated from props', () => {
    const button = mount(
      <Button
        onClick={onClickMock}
        label="button 1"
        isLoading
      >
        expected text
      </Button>,
    );

    expect(button.text()).toBe('expected text');
  });
});
