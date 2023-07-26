import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CacheProvider} from "@emotion/react";
import createCache from '@emotion/cache';

const cache = createCache({
    key: 'css',
    prepend: true,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <CacheProvider value={cache}>
            <App />
        </CacheProvider>
    </BrowserRouter>
  </React.StrictMode>
);
