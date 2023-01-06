export const isDev = process.env.NODE_ENV === 'development';

export const getPublicURL = (resourceURL:string)=> {
  const assetPrefix = isDev ? '' : '/resume';
  return `${assetPrefix}${resourceURL}`;
};