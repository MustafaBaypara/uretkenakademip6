import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { GlobalStyle } from './globalStyle.ts';
import { SiteCtxProvider, SiteContext } from './context.tsx';

function ThemeProvider() {
  const { darkMode } = useContext(SiteContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode);
  }, [darkMode]);

  return (
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render(
  <SiteCtxProvider>
    <ThemeProvider />
  </SiteCtxProvider>,
  document.getElementById('root')
);
