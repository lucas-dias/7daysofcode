import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Cta from '@/components/Cta/Cta'
import Ofertas from '@/components/Ofertas/Ofertas'
import MinhaPlanta from '@/components/MinhaPlanta/MinhaPlanta'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Cta />
      <MinhaPlanta />
      <Ofertas />
      <Footer />
    </main>
  )
}
