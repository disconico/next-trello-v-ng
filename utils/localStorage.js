const saveToLocalStorage = (title, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(title, serializedData);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = (title) => {
  try {
    const serializedData = localStorage.getItem(title);
    if (serializedData === null) return null;
    return JSON.parse(serializedData);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { saveToLocalStorage, loadFromLocalStorage };
