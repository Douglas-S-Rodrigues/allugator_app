const USER = "user";
const CART = "cart";

export const addUser = (id, name, email) => {
  localStorage.setItem(USER, JSON.stringify({ id, name, email }));
};

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem(USER)) || { name: "" };
  return user;
};

export const cleanLocalStorage = () => localStorage.clear();

export const addId = (id) => {
  localStorage.setItem("userId", JSON.stringify({ id }));
};

export const getId = () => {
  const userId = JSON.parse(localStorage.getItem(USER));
  return userId.id;
};

export const addToCart = (item) =>
  localStorage.setItem(CART, JSON.stringify(item)) || [];
