import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import  Landing  from '../components/Landing';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Launch Library 2</title>
      </Head>
      
      <Navbar />
      <Landing />
    </div>
  )
}
