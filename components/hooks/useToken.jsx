import React from 'react';
import { useState, useEffect } from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export default function useToken() {
  const getCookies = () => {
    const cookies = parseCookies();
    const token = cookies.token;
    return token ? JSON.parse(token) : null;
  };

  const [token, setToken] = useState(getCookies());

  const saveToken = (userToken) => {
    setCookie(null, 'token', JSON.stringify(userToken), {
      maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
      path: '/',
    });
    setToken(userToken);
  };

  const removeToken = () => {
    destroyCookie(null, 'token');
    setToken(null);
  };

  return {
    setToken: saveToken,
    removeToken,
    token,
  };
}
