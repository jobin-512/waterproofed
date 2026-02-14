import { createRootRoute, Outlet, HeadContent } from '@tanstack/react-router'


export const Route = createRootRoute({
  component: () => (
    <>
    <head>
      <HeadContent />
    </head>   
      <Outlet />
    </>
  ),    
})
