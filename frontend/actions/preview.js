export const OPEN_PREVIEW = 'OPEN_PREVIEW';
export const CLOSE_PREVIEW = 'CLOSE_PREVIEW';

export const openPreview = (post) => {
  return {
    type: OPEN_PREVIEW,
    post
  };
};

export const closePreview = () => {
  return {
    type: CLOSE_PREVIEW,
  };
};