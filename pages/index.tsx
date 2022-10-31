import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Layout } from '@components/Layout'
import Head from 'next/head'
import Script from 'next/script'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        async
        data-adtest="on"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3515788983358906"
        crossOrigin="anonymous"
      ></Script>
      <Header />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3515788983358906"
        data-ad-slot="9976672844"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Layout />
      <Footer />
      <Script id="Adsense-id">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </>
  )
}
