import React, { useEffect } from 'react';
import './globals.css';

import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <Component {...pageProps}/>
}