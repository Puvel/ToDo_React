export const isToday = date => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isTomorrow = date => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() + 1 &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

// export default { isToday, isTomorrow };
