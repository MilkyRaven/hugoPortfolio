import '@/styles/globals.css'
import { Jost } from 'next/font/google'

import type { AppProps } from 'next/app'



const jost = Jost({
  weight: ['300', '400'],
  style: ['normal'],
  subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jost.className}>
      <Component {...pageProps} />
    </main>
  )
}
