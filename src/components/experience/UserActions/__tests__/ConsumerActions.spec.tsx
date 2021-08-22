/* eslint-disable max-len */
import { mount } from 'enzyme';
import { ConsumerModel, RelationshipStatus } from 'models/user';
import TestWrapper from 'components/base-components/TestWrapper';
import ConsumerActions from '../ConsumerActions';

describe('User Actions - ConsumerActions', () => {
  it('should show the right actions when the user is not related to me', () => {
    const user: ConsumerModel = {
      id: 'id',
      name: 'user',
      avatar: 'user1',
      userName: 'user',
      friends: undefined,
      following: undefined,
      relationStatus: RelationshipStatus.UNRELATED,
    };

    const component = mount(
      <TestWrapper
        component={ConsumerActions}
        queryKey="query-key"
        user={user}
      />
    );

    component.find('button').simulate('click');

    expect(component.find('[data-el="pending-req-msg"]').exists()).toBe(false);
    expect(component.find('[data-id="send-msg-action"]').exists()).toBe(false);
    expect(component.find('[data-id="mute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unmute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="send-req-action"]').exists()).toBe(true);
    expect(component.find('[data-id="accept-req-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unfriend-action"]').exists()).toBe(false);
    expect(component.find('[data-id="block-action"]').exists()).toBe(true);
  });

  it('should show the right actions when I sent a friend request', () => {
    const user: ConsumerModel = {
      id: 'id',
      name: 'user',
      avatar: 'user1',
      userName: 'user',
      friends: undefined,
      following: undefined,
      relationStatus: RelationshipStatus.PENDING,
    };

    const component = mount(
      <TestWrapper
        component={ConsumerActions}
        queryKey="query-key"
        user={user}
      />
    );

    component.find('button').simulate('click');

    expect(component.find('[data-el="pending-req-msg"]').exists()).toBe(true);
    expect(component.find('[data-id="send-msg-action"]').exists()).toBe(false);
    expect(component.find('[data-id="mute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unmute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="send-req-action"]').exists()).toBe(false);
    expect(component.find('[data-id="accept-req-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unfriend-action"]').exists()).toBe(false);
    expect(component.find('[data-id="block-action"]').exists()).toBe(true);
  });

  it('should show the right actions when I have to accept the friend request', () => {
    const user: ConsumerModel = {
      id: 'id',
      name: 'user',
      avatar: 'user1',
      userName: 'user',
      friends: undefined,
      following: undefined,
      relationStatus: RelationshipStatus.PENDING_FOR_ME,
    };

    const component = mount(
      <TestWrapper
        component={ConsumerActions}
        queryKey="query-key"
        user={user}
      />
    );

    component.find('button').simulate('click');

    expect(component.find('[data-el="pending-req-msg"]').exists()).toBe(false);
    expect(component.find('[data-id="send-msg-action"]').exists()).toBe(false);
    expect(component.find('[data-id="mute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unmute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="send-req-action"]').exists()).toBe(false);
    expect(component.find('[data-id="accept-req-action"]').exists()).toBe(true);
    expect(component.find('[data-id="decline-req-action"]').exists()).toBe(true);
    expect(component.find('[data-id="unfriend-action"]').exists()).toBe(false);
    expect(component.find('[data-id="block-action"]').exists()).toBe(true);
  });

  it('should show the right actions when I\'m friend with the user', () => {
    const user: ConsumerModel = {
      id: 'id',
      name: 'user',
      avatar: 'user1',
      userName: 'user',
      friends: undefined,
      following: undefined,
      relationStatus: RelationshipStatus.ACCEPTED,
    };

    const component = mount(
      <TestWrapper
        component={ConsumerActions}
        queryKey="query-key"
        user={user}
      />
    );

    component.find('button').simulate('click');

    expect(component.find('[data-el="pending-req-msg"]').exists()).toBe(false);
    expect(component.find('[data-id="send-msg-action"]').exists()).toBe(true);
    expect(component.find('[data-id="mute-action"]').exists()).toBe(true);
    expect(component.find('[data-id="unmute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="send-req-action"]').exists()).toBe(false);
    expect(component.find('[data-id="accept-req-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unfriend-action"]').exists()).toBe(true);
    expect(component.find('[data-id="block-action"]').exists()).toBe(true);
  });

  it('should show the right actions when I muted the user', () => {
    const user: ConsumerModel = {
      id: 'id',
      name: 'user',
      avatar: 'user1',
      userName: 'user',
      friends: undefined,
      following: undefined,
      relationStatus: RelationshipStatus.MUTED,
    };

    const component = mount(
      <TestWrapper
        component={ConsumerActions}
        queryKey="query-key"
        user={user}
      />
    );

    component.find('button').simulate('click');

    expect(component.find('[data-el="pending-req-msg"]').exists()).toBe(false);
    expect(component.find('[data-id="send-msg-action"]').exists()).toBe(true);
    expect(component.find('[data-id="mute-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unmute-action"]').exists()).toBe(true);
    expect(component.find('[data-id="send-req-action"]').exists()).toBe(false);
    expect(component.find('[data-id="accept-req-action"]').exists()).toBe(false);
    expect(component.find('[data-id="unfriend-action"]').exists()).toBe(true);
    expect(component.find('[data-id="block-action"]').exists()).toBe(true);
  });
});
