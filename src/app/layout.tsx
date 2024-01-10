import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/antd.registry'
import TopMenuComponent from './component/top.menu'
import { Layout } from 'antd'
import ChatBoxModule from './component/chat.box'
import AnalyticsGoogle from './component/analytics.google'
import Head from 'next/head'
import NProgressWrapper from '@/lib/nprogress.wrapper'

export const metadata: Metadata = {
  title: 'SLM GLOBAL',
  description: 'Welcome to Vietnam! SLM is appreciated to hear you and offer the best solution for Iron Casting,Ground Screw,Rubber,Fabrication Service, and whatever you need.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </Head>
      <AnalyticsGoogle />
      <body style={{ margin: '0' }}>
        <StyledComponentsRegistry>
          <NProgressWrapper>
            <Layout>
              <TopMenuComponent />
              <Layout style={{ marginTop: '116px' }}>
                {children}
              </Layout>
            </Layout>
            <ChatBoxModule />
          </NProgressWrapper>
        </StyledComponentsRegistry>
      </body>
    </html >
  )
}
