import ReactDOM from 'react-dom/client'
import { createRouter } from './router'
import { RouterProvider } from '@tanstack/react-router'

import "./App.css"


const router = createRouter()

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <RouterProvider router={router} />
)