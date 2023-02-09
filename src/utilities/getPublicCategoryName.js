import { PUBLIC_CATEGORIES } from 'constants/noticesCategory';

export const getPublicCategoryName = category => {
  if (!category) return 'N/A';

  return PUBLIC_CATEGORIES.find(element => element.category === category).name;
};
