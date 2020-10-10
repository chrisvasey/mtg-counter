import Head from 'next/head'
import Counter from '../components/Counter'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'
import { forwardRef, useRef, useImperativeHandle } from 'react';

export default function Home() {
   const counterElm = useRef();

  return (
    <div className={styles.container}>
      <Head>
        <title>Life Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Counter ref={counterElm} rotate/>
        <h1 onClick={() => counterElm.current.reset()}>Reset</h1>
        <Counter ref={counterElm}/>
      </main>
    </div>
  )
}
