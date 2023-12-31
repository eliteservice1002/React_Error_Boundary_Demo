import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import ErrorPage from './components/error-page/ErrorPage';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onReset={() => (location.href = '/')}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
