/* eslint-disable max-len */
import { mount } from 'enzyme';
import { FollowerStatus, PublisherModel } from 'models/user';
import TestProviders from 'components/experience/TestProviders';
import PublisherActions from '../PublisherActions';

describe('User Actions - PublisherActions', () => {
  it('should show the right actions when I\'m not following the publisher', () => {
    const user: PublisherModel = {
      id: 'id',
      name: 'user',
      avatar: 'user1',
      userName: 'user',
      count: {
        events: undefined,
        followers: undefined,
      },
      friends: [],
      followerStatus: FollowerStatus.UNRELATED,
    };

    const component = mount(
      <TestProviders
        component={PublisherActions}
        queryKey="query-key"
        user={user}
      />
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
      count: {
        events: undefined,
        followers: undefined,
      },
      friends: [],
      followerStatus: FollowerStatus.FOLLOWING,
    };

    const component = mount(
      <TestProviders
        component={PublisherActions}
        queryKey="query-key"
        user={user}
      />
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
      count: {
        events: undefined,
        followers: undefined,
      },
      friends: [],
      followerStatus: FollowerStatus.MUTED,
    };

    const component = mount(
      <TestProviders
        component={PublisherActions}
        queryKey="query-key"
        user={user}
      />
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
