import Head from 'next/head'
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Launch Library 2</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div>Hello World</div>
    </div>
  )
}
