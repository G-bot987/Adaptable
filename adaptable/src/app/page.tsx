import Image from 'next/image'
import styles from './page.module.css'
import variables from '../styles/variables.module.scss';
import Header from './mainComponents/Header/Header';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

    </main>
  )
}
