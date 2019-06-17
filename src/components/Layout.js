import React from 'react'
import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="p-4 md:p-0 md:w-8/12 mx-auto pt-8 md:pt-12">
      {children}
    </main>
  </>
)

export default Layout
