export const OPEN_SHOW = 'OPEN_SHOW';
export const CLOSE_SHOW = 'CLOSE_SHOW';

export const openShow = (post) => {
  return {
    type: OPEN_SHOW,
    post
  };
};

export const closeShow = () => {
  return {
    type: CLOSE_SHOW,
  };
};
