import React from 'react';
import '@/styles/globals.css';
import { QueryClientProvider, QueryClient } from "react-query";
import type { AppProps } from 'next/app';

const clientQuery = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return(
    <QueryClientProvider client={clientQuery}>
    < Component {...pageProps} />
   </QueryClientProvider>
  );



}

