/* eslint-disable max-len */
import { NotificationType, showNotification } from 'activate-components';
import interestsApi from 'api/interests';
import { ApiErrorType } from 'api/base';
import { Actions } from '../../reducer';
import saveInterests from '../save-interests';

jest.mock('activate-components', () => ({
  showNotification: jest.fn(),
  NotificationType: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
  }
}));
jest.mock('api/interests');

const dispatch = jest.fn();
const closeModal = jest.fn();

const interests = ['cat-1', 'cat-3', 'cat-5'];

describe('Interests modal - saveInterests action', () => {
  beforeEach(() => {
    dispatch.mockClear();
    closeModal.mockClear();
    // @ts-ignore
    interestsApi.update.mockClear();
    // @ts-ignore
    showNotification.mockClear();
  });

  it('should call the api to set the user interests and update the profile', async () => {
    // @ts-ignore
    interestsApi.update.mockResolvedValue({});

    await saveInterests(dispatch, interests, closeModal)();

    expect(dispatch).toBeCalledTimes(1);
    expect(interestsApi.update).toHaveBeenCalledWith(interests);
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.SUCCESS,
      message: 'Your interests have been updated, go discover what\'s new',
    });
  });

  it('should call the api to set the user interests and show an error notification', async () => {
    // @ts-ignore
    interestsApi.update.mockRejectedValue({ errorType: 'error' });

    await saveInterests(dispatch, interests, closeModal)();

    expect(dispatch).toBeCalledTimes(2);
    expect(interestsApi.update).toHaveBeenCalledWith(interests);
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'There has been an issue setting your interests',
    });
  });

  it('should call the api to set the user interests and dispatch an action to set the error', async () => {
    // @ts-ignore
    interestsApi.update.mockRejectedValue({ errorType: ApiErrorType.VALIDATION });

    await saveInterests(dispatch, interests, closeModal)();

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: Actions.SET_ERROR,
      payload: 'You need to select some interests',
    });
    expect(interestsApi.update).toHaveBeenCalledWith(interests);
    expect(showNotification).not.toHaveBeenCalled();
  });
});
