import React, { ReactElement } from 'react'
import SEO from '../SEO'

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <SEO />
      <main>{children}</main>
    </>
  )
}
export default Layout
