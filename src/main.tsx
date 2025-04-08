import { createRoot } from 'react-dom/client'
import './index.less'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import './18n.ts'
import {Suspense} from "react";

createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
          <Suspense>
              <App />
          </Suspense>
      </BrowserRouter>
)
