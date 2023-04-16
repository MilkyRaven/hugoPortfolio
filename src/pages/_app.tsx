import '@/styles/globals.css'
import { Jost } from 'next/font/google'
import type { AppProps } from 'next/app'

const jost = Jost({
  subsets: ['latin'],
  weight: '300'
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jost.className}>
      <Component {...pageProps} />
    </main>
  )
}
