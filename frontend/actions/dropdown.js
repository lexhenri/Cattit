export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';

export const toggleDropdown = (status) => {
  return {
    type: TOGGLE_DROPDOWN,
    status
  };
};