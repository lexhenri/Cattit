export const OPEN_SHOW = 'OPEN_SHOW';
export const CLOSE_SHOW = 'CLOSE_SHOW';

export const openShow = (payload) => {
  return {
    type: OPEN_SHOW,
    payload
  };
};

export const closeShow = (subcattit) => {
  return {
    type: CLOSE_SHOW,
    subcattit
  };
};
