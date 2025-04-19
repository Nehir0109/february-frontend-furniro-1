export const localStorageUtility = {
  get: (key) => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("LocalStorage Get Error:", error);
      return null;
    }
  },

  set: (key, value) => {
    try {
      const jsonString = JSON.stringify(value);
      localStorage.setItem(key, jsonString);
    } catch (error) {
      console.error("LocalStorage Set Error:", error);
    }
  }
};
