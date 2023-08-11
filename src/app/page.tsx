import styles from './page.module.css'
import Header from '@/components/Header/page'
import Cta from '@/components/Cta/page'
import Ofertas from '@/components/Ofertas/Ofertas'
import MinhaPlanta from '@/components/MinhaPlanta/MinhaPlanta'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Cta />
      <MinhaPlanta />
      <Ofertas />
    </main>
  )
}
