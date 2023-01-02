import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to Token Wise!
        </h2>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>
    </div>
  )
}
 
export default Home
