import React from "react";
import { useState } from "react";
import { useEffect } from 'react';

export default function useToken() {
  const getToken = () => {
    if (typeof window !== 'undefined') {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
