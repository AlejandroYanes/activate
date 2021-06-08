import { CategoryModel } from 'models/category';

export default function findCategory(categories: CategoryModel[], id: string) {
  const flatList = [...categories, ...categories.flatMap((cat) => cat.subcategories)];
  return flatList.find((cat) => cat?.id === id);
}
