const USER = 'user';

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