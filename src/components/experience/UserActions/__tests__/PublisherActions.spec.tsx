/* eslint-disable max-len */
import { mount } from 'enzyme';
import { FollowerStatus, PublisherModel } from 'models/user';
import AppProviders from 'components/providers';
import PublisherActions from '../PublisherActions';

const Wrapper = ({ children }) => (
  <AppProviders>
    {children}
  </AppProviders>
);

describe('User Actions - PublisherActions', () => {
  it('should show the right actions when I\'m not following the publisher', () => {
    const user: PublisherModel = {
      id: 'id',
      name: 'user',
      avatar: 'user1',
      userName: 'user',
      events: undefined,
      followers: undefined,
      followerStatus: FollowerStatus.UNRELATED,
    };

    const component = mount(
      <Wrapper>
        <PublisherActions user={user} queryKey="query-key" />
      </Wrapper>
    );

    component.find('button').simulate('click');

    expect(component.find('[data-id="follow-action"]').exists()).toBe(true);
    expect(component.find('[data-id="send-msg-action"]').exists()).toBe(false);
    expect(component.find('[data-id="mute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unmute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unfollow-action"]').exists()).toBe(false);
    expect(component.find('[data-id="block-action"]').exists()).toBe(true);
  });

  it('should show the right actions when I\'m following the publisher', () => {
    const user: PublisherModel = {
      id: 'id',
      name: 'user',
      avatar: 'user1',
      userName: 'user',
      events: undefined,
      followers: undefined,
      followerStatus: FollowerStatus.FOLLOWING,
    };

    const component = mount(
      <Wrapper>
        <PublisherActions user={user} queryKey="query-key" />
      </Wrapper>
    );

    component.find('button').simulate('click');

    expect(component.find('[data-id="follow-action"]').exists()).toBe(false);
    expect(component.find('[data-id="send-msg-action"]').exists()).toBe(true);
    expect(component.find('[data-id="mute-action"]').exists()).toBe(true);
    expect(component.find('[data-id="unmute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unfollow-action"]').exists()).toBe(true);
    expect(component.find('[data-id="block-action"]').exists()).toBe(true);
  });

  it('should show the right actions when I muted the publisher', () => {
    const user: PublisherModel = {
      id: 'id',
      name: 'user',
      avatar: 'user1',
      userName: 'user',
      events: undefined,
      followers: undefined,
      followerStatus: FollowerStatus.MUTED,
    };

    const component = mount(
      <Wrapper>
        <PublisherActions user={user} queryKey="query-key" />
      </Wrapper>
    );

    component.find('button').simulate('click');

    expect(component.find('[data-id="follow-action"]').exists()).toBe(false);
    expect(component.find('[data-id="send-msg-action"]').exists()).toBe(true);
    expect(component.find('[data-id="mute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unmute-action"]').exists()).toBe(true);
    expect(component.find('[data-id="unfollow-action"]').exists()).toBe(true);
    expect(component.find('[data-id="block-action"]').exists()).toBe(true);
  });
});
