import React, { ReactElement } from 'react'

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
export default Layout
