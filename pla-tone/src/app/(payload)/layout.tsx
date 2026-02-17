import React from 'react'

import { importMap } from '@/app/(payload)/admin/importMap'
import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'

import './custom.scss'

const Layout = ({ children }: { children: React.ReactNode }) => (
    <RootLayout importMap={importMap} config={config}>
        {children}
    </RootLayout>
)

export default Layout
