export const toggleValue = (value, setState, currentValues) => {
  if (currentValues.includes(value)) {
    setState(currentValues.filter((v) => v !== value));
  } else {
    setState([...currentValues, value]);
  }
};
