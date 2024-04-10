const transformDriveUrl = (url) => {
  const id = getDriveImageId(url);
  return `https://lh3.googleusercontent.com/d/${id}=w1000?authuser=0`;
};

const getDriveImageId = (url) => {
  const match = url.match(/file\/d\/(.*?)\/view/);
  return match ? match[1] : null;
};

export { transformDriveUrl, getDriveImageId };
