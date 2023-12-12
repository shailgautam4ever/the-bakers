// Concatenate image url with server url
export const getImage = (url) => {
  const urlString = `http://localhost:8080/${url}`;
  return urlString;
};
