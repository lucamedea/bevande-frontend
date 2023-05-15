import '@/styles/globals.css';
import type { AppProps } from 'next/app';
//import Orders from "../pages/orders";
//import Products from "../pages/products";
import Account from "../pages/account.jsx";
//import Users from "../pages/users";
import NutritionalValues from "../pages/nutritionalValues";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid } from "@nextui-org/react";
import useToken from "../components/hooks/useToken";
import NavBar from "../components/navbar/navbar";
import Login from "./login.jsx";



export default function App({ Component, pageProps }: AppProps) {
  return < Component {...pageProps} />


}

