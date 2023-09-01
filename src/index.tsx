import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CacheProvider} from "@emotion/react";
import createCache from '@emotion/cache';
import {QueryClient} from "react-query";
import {QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const cache = createCache({
    key: 'css',
    prepend: true,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
      <QueryClientProvider client={ queryClient}>
        <BrowserRouter>
            <CacheProvider value={cache}>
                <App />
            </CacheProvider>
        </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>
);
