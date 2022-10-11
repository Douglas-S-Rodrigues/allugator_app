const USER = 'user';
const CART = 'cart';
const ITEM = 'item';

export const addUser = (name, email) => {
  localStorage.setItem(USER, JSON.stringify({ name, email }));
};

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem(USER)) || { name: '' };
  return user;
};

export const cleanLocalStorage = () => localStorage.clear();

export const addId = (id) => {
  localStorage.setItem('userId', JSON.stringify({ id }));
};

export const addFavorite = (item) => localStorage
  .setItem(CART, JSON.stringify(item)) || [];

export const removeFromFavorite = (id) => {
  const items = JSON.parse(localStorage.getItem(ITEM)) || [];
  const newItem = items.filter((item) => item.id !== id);
  localStorage.setItem(ITEM, JSON.stringify(newItem));
};