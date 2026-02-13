import {
  createRouter as createTanStackRouter,
  createMemoryHistory,
  createBrowserHistory,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function createRouter(url?: string) {
  const isServer = typeof window === 'undefined'
  
  // ✅ On client, use browser's current URL
  const initialUrl = isServer ? url : window.location.pathname

  const history = isServer
    ? createMemoryHistory({ initialEntries: [initialUrl || '/'] })
    : createBrowserHistory()

  return createTanStackRouter({ routeTree, history })
} 