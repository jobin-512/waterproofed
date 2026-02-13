// src/routes/_layout.tsx
import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/header'
import Footer from '../components/footer'

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}