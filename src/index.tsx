import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@store/store';
import { IS_REACT_STRICT_MODE } from '@config/app';
import { App } from './App';

import 'styles/index.scss';

const ReactStrictModeWrapper: FC<{
  isStrictModeEnable: boolean;
  children?: React.ReactNode;
}> = ({ children, isStrictModeEnable }) => {
  return <>{isStrictModeEnable ? <React.StrictMode>{children}</React.StrictMode> : children}</>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ReactStrictModeWrapper isStrictModeEnable={IS_REACT_STRICT_MODE}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ReactStrictModeWrapper>,
);
