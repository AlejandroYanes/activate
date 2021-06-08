import { CategoryModel } from 'models/category';
import { Actions } from '../reducer';
import findCategory from './find-category';

export default function handleInterests(
  dispatch,
  oldInterest: string[],
  categories: CategoryModel[],
) {
  return (nextInterests: string[]) => {
    const isRemoving = nextInterests.length < oldInterest.length;

    if (isRemoving) {
      return dispatch({
        type: Actions.SET_INTERESTS,
        payload: nextInterests,
      });
    }

    const newInterest = nextInterests[nextInterests.length - 1];
    const category = findCategory(categories, newInterest);

    if (category.subcategories) {
      const nextValue = nextInterests.filter(
        (interest) => (
          !category.subcategories.some((cat) => cat.id === interest)
        )
      );
      return dispatch({
        type: Actions.SET_INTERESTS,
        payload: nextValue,
      });
    }

    const nextValue = nextInterests.filter(
      (interest) => interest !== category.parentId
    );

    dispatch({
      type: Actions.SET_INTERESTS,
      payload: nextValue,
    });
  };
}

