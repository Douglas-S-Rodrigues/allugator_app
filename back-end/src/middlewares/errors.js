const NotFoundError = (message) => {
  const err = new Error(message);
  err.name = 'NotFoundError';
  throw err;
};
const ValidationError = (message) => {
  const err = new Error(message);
  err.name = 'ValidationError';
  throw err;
};

module.exports = {
  NotFoundError,
  ValidationError,
  
};