import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Link rel="stylesheet" href="https://use.typekit.net/tss6gvn.css"></Link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
