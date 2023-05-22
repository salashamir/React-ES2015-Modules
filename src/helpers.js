const choice = (items) => {
  const randIdx = Math.floor(Math.random() * items.length);
  return items[randIdx];
};

const remove = (items, item) => {
  return items.filter((i) => i !== item);
};

export { choice, remove };
