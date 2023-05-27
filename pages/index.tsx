import React from 'react';
import Navbar1 from '../components/navbar/navbar.jsx';
import { Inter } from 'next/font/google';
import Login from './login.jsx';
import useToken from '@/components/hooks/useToken.jsx';
import Products from './products';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {

 const { token, setToken } = useToken();
 
  if (!token) {
  return <Login setToken={setToken} />;
 }

  return (
<Products/>
  )
}