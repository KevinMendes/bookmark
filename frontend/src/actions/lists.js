// Types
export const LOAD_LISTS = 'LOAD_LISTS';
export const SAVE_LISTS = 'SAVE_LISTS';

// Creators
export const loadRecipes = () => ({
  type: LOAD_LISTS,
});

export const saveRecipes = (lists) => ({
  type: SAVE_LISTS,
  lists,
});

export const loadLists = () => ({
  type: LOAD_LISTS,
});
