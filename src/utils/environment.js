export const API =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_DEV
    : process.env.REACT_APP_API_PROD;

export const DOMAIN =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DOMAIN_DEV
    : process.env.REACT_APP_DOMAIN_PROD;

export const APP_NAME = process.env.REACT_APP_NAME;
