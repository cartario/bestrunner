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

