import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import './18n.ts'
import {Suspense} from "react";

createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
              <App />
          </Suspense>
      </BrowserRouter>
)
