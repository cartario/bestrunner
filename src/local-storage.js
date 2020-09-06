export const getItems = () => {
  try {
    return JSON.parse(localStorage.getItem(`DATA`)) || {};
  } catch (err) {
    return {};
  }
}

export const setItem = (key, value) => {
  const store = getItems();
  localStorage.setItem(`DATA`,
      JSON.stringify(Object.assign({}, store, {[key]: value}))
  );
}

export const setItems= (items)=> {
  localStorage.setItem(
      `DATA`,
      JSON.stringify(items)
  );
}

export const removeItem=(key)=> {
  const store = getItems();
  delete store[key];
  localStorage.setItem(`DATA`, JSON.stringify(store)
  );
}

export const parseItemFromStorage = (data) => {
  return {  
    id: data.id,  
    type: data.type,
    date: new Date(data.date),
    distance: data.distance,
    comment: data.comment,
  };
};

export const createStoreStructure = (items) => {
  return items.reduce((acc, current) => {
    return Object.assign({}, acc, {
      [current.id]: current,
    });
  }, {});
};
