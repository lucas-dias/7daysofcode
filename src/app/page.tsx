import styles from './page.module.css'
import Header from '@/components/Header/page'
import Cta from '@/components/Cta/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Cta />
    </main>
  )
}
