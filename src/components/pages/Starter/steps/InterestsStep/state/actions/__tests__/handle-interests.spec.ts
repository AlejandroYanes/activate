import { CategoryModel } from 'models/category';
import handleInterests from '../handle-interests';
import { Actions } from '../../reducer';

const dispatch = jest.fn();

const categories: CategoryModel[] = [
  { id: 'cat-1', name: 'cat-1', icon: 'cat-1' },
  {
    id: 'cat-2',
    name: 'cat-2',
    icon: 'cat-2',
    subcategories: [
      { id: 'cat-4', name: 'cat-4', icon: 'cat-4' },
      { id: 'cat-5', name: 'cat-5', icon: 'cat-5' },
    ],
  },
  {
    id: 'cat-3',
    name: 'cat-3',
    icon: 'cat-3',
    subcategories: [
      { id: 'cat-6', name: 'cat-6', icon: 'cat-6' },
      { id: 'cat-7', name: 'cat-7', icon: 'cat-7', parentId: 'cat-3' },
      { id: 'cat-8', name: 'cat-8', icon: 'cat-8' },
    ],
  },
];

describe('Starter page - Interests step - handleInterests action', () => {
  it('should remove the parent category if a child is selected', () => {
    const oldInterests = ['cat-1', 'cat-3', 'cat-4'];
    const nextInterests = ['cat-1', 'cat-3', 'cat-4', 'cat-7'];
    handleInterests(dispatch, oldInterests, categories)(nextInterests);

    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.SET_INTERESTS,
      payload: ['cat-1', 'cat-4', 'cat-7'],
    });
  });

  it('should remove all child categories if the parent is selected', () => {
    const oldInterests = ['cat-1', 'cat-4', 'cat-6', 'cat-8'];
    const nextInterests = ['cat-1', 'cat-4', 'cat-6', 'cat-8', 'cat-3'];
    handleInterests(dispatch, oldInterests, categories)(nextInterests);

    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.SET_INTERESTS,
      payload: ['cat-1', 'cat-4', 'cat-3'],
    });
  });

  it('should set the new interests as they come', () => {
    const oldInterests = ['cat-1', 'cat-4', 'cat-6', 'cat-8'];
    const nextInterests = ['cat-1', 'cat-4', 'cat-6'];
    handleInterests(dispatch, oldInterests, categories)(nextInterests);

    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.SET_INTERESTS,
      payload: ['cat-1', 'cat-4', 'cat-6'],
    });
  });
});
