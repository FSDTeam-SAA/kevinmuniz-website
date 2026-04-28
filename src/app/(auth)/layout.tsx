import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthLayout
