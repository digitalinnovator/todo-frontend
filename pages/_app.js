import '@/styles/globals.css';
import '@/styles/layout.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}