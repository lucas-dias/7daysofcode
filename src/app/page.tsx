import styles from './page.module.css'
import Header from '@/components/Header/page'
import Cta from '@/components/Cta/page'
import Ofertas from '@/components/Ofertas/Ofertas'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Cta />
      <Ofertas />
    </main>
  )
}
