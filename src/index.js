import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter  } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { App } from './components/App/App';
import { theme } from './constants';


import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter >
            <App />
          </HashRouter >
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);


