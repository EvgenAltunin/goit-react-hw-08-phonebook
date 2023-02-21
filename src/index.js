import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme/Theme';
import { store} from './redux/store';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notificationParams } from 'settings/settings';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <App />
          <ToastContainer
            theme="colored"
            autoClose={notificationParams.autoClose}
          />
          ;
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
