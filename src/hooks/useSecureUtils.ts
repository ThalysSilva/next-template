'use client';

import { setCookie, parseCookies, destroyCookie } from 'nookies';
import crypto from 'crypto-js';
import config from '@/config';
import { useLocalStorage } from './useLocalStorage';

type Props = {
  defaultHash?: string;
};

type Data = string | Record<string, any>;

export function useSecureUtils({ defaultHash }: Props = {}) {
  const { secretKey } = config.envs;
  const { getLocalStorage, setLocalStorage, removeLocalStorage } = useLocalStorage();

  function encrypt(data: Data, customHash = secretKey) {
    const iv = crypto.enc.Utf8.parse(customHash);
    const encrypted = crypto.AES.encrypt(crypto.enc.Utf8.parse(JSON.stringify(data)), iv, {
      keySize: 128 / 8,
      iv: iv,
      mode: crypto.mode.CBC,
      padding: crypto.pad.Pkcs7,
    });

    return encrypted.toString();
  }

  function decrypt(cipherDataString: string, customHash = secretKey) {
    const iv = crypto.enc.Utf8.parse(customHash);
    if (!cipherDataString) return '';
    const decryptedDataEncoded = crypto.AES.decrypt(
      cipherDataString,
      crypto.enc.Utf8.parse(customHash),
      {
        iv: iv,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7,
      },
    );

    const decryptedString = decryptedDataEncoded
      ? crypto.enc.Utf8.stringify(decryptedDataEncoded)
      : '';

    if (!decryptedString || decryptedString === 'undefined') return '';

    const decData = JSON.parse(decryptedString ?? '');
    return decData;
  }

  function saveEncryptedCookie(
    key: string,
    value: string | Record<string, any>,
    customHash = defaultHash,
    expiresIn?: Date,
    path?: string,
  ) {
    const encryptedValue = encrypt(value, customHash);
    const encryptedKey = encrypt(key, customHash).replaceAll('=', 'x');

    setCookie(null, encryptedKey, encryptedValue, {
      expires: expiresIn,
      path: path ?? '/',
    });
  }

  function getEncryptedCookie(key: string, customHash = defaultHash) {
    const cookies = parseCookies();
    const encryptedKey = encrypt(key, customHash).replaceAll('=', 'x');
    const encryptedValue = cookies[encryptedKey];
    if (!encryptedValue) return '';
    const value = decrypt(encryptedValue, customHash);
    return value;
  }
  function destroyEncryptedCookie(key: string | string[], customHash = defaultHash) {
    if (key instanceof Array) {
      key.map((k) => {
        const encryptedKey = encrypt(k, customHash).replaceAll('=', 'x');
        destroyCookie(null, encryptedKey);
      });
      return;
    }
    const encryptedKey = encrypt(key, customHash).replaceAll('=', 'x');
    destroyCookie(null, encryptedKey);
  }

  function saveEncryptedData(
    key: string,
    value: string | Record<string, any>,
    customHash = defaultHash,
  ) {
    const encryptedValue = encrypt(value, customHash);
    const encryptedKey = encrypt(key, customHash).replaceAll('=', 'x');

    setLocalStorage(encryptedKey, encryptedValue);
  }

  function getEncryptedData(key: string, customHash = defaultHash) {
    const encryptedKey = encrypt(key, customHash).replaceAll('=', 'x');
    const encryptedValue = getLocalStorage(encryptedKey);
    if (!encryptedValue) return '';
    const value = decrypt(encryptedValue, customHash);
    return value;
  }
  function destroyEncryptedData(key: string | string[], customHash = defaultHash) {
    if (key instanceof Array) {
      key.map((k) => {
        const encryptedKey = encrypt(k, customHash).replaceAll('=', 'x');
        removeLocalStorage(encryptedKey);
      });
      return;
    }
    const encryptedKey = encrypt(key, customHash).replaceAll('=', 'x');
    removeLocalStorage(encryptedKey);
  }

  return {
    destroyEncryptedCookie,
    destroyEncryptedData,
    saveEncryptedCookie,
    getEncryptedCookie,
    saveEncryptedData,
    getEncryptedData,
    defaultHash,
    secretKey,
    encrypt,
    decrypt,
  };
}
