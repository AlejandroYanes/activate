import { CategoryModel } from 'models/category';
import { Actions } from '../reducer';

export default function toggleTopCategory(
  dispatch,
  interests: string[],
  categories: CategoryModel[],
) {
  return (categoryId: string, areAllSubsSelected: boolean) => {
    const { subcategories } = categories.find(cat => cat.id === categoryId);
    let extendedInterests;

    if (areAllSubsSelected) {
      extendedInterests = interests.filter(
        interest => !subcategories.some(sub => sub.id === interest)
      );
    } else {
      extendedInterests = interests.concat(
        subcategories.map(cat => cat.id)
      );
    }

    const interestsSet = new Set(extendedInterests);
    dispatch({ type: Actions.SET_INTERESTS, payload: [...interestsSet] });
  };
}
