import '../styles/globals.css';
import { useEffect } from 'react';
import { ListsProvider } from '../Context/ListsContext';

export default function App({ Component, pageProps }) {
  return (
    <ListsProvider>
      <Component {...pageProps} />
    </ListsProvider>
  );
}
