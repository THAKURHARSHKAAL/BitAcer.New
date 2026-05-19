import CryptoJS from 'crypto-js';

export const generatePropertyHash = (payload) =>
  CryptoJS.SHA256(JSON.stringify(payload)).toString(CryptoJS.enc.Hex);
