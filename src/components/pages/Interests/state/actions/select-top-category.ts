import { CategoryModel } from 'models/category';
import { Actions } from '../reducer';

export default function selectTopCategory(
  dispatch,
  interests: string[],
  categories: CategoryModel[],
) {
  return (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    const extendedInterests = interests.concat(
      category.subcategories.map(cat => cat.id)
    );
    const interestsSet = new Set(extendedInterests);

    dispatch({ type: Actions.SET_INTERESTS, payload: [...interestsSet] });
  };
}
