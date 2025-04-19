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
};
