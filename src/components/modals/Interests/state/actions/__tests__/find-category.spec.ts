import { CategoryModel } from 'models/category';
import findCategory from '../find-category';

describe('Interests modal - findCategory action', () => {
  it('should return the right category within the tree', () => {
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
          { id: 'cat-7', name: 'cat-7', icon: 'cat-7' },
          { id: 'cat-8', name: 'cat-8', icon: 'cat-8' },
        ],
      },
    ];

    expect(findCategory(categories, 'cat-5')).toEqual({
      id: 'cat-5',
      name: 'cat-5',
      icon: 'cat-5',
    });
    expect(findCategory(categories, 'cat-3')).toEqual({
      id: 'cat-3',
      name: 'cat-3',
      icon: 'cat-3',
      subcategories: [
        { id: 'cat-6', name: 'cat-6', icon: 'cat-6' },
        { id: 'cat-7', name: 'cat-7', icon: 'cat-7' },
        { id: 'cat-8', name: 'cat-8', icon: 'cat-8' },
      ],
    });
  });
});
