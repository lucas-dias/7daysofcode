'use client'
import estilos from './Ofertas.module.scss'
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa"
import axios from 'axios'
import { useEffect, useState } from 'react'
import IPlantas from '@/interfaces/IPlantas'


const Ofertas = () => {

  const [ofertas, setOfertas] = useState<IPlantas[]>([])
  const produtosQueryApi = (url: string) => {
    axios.get<IPlantas[]>(url)
      .then(resposta => setOfertas(resposta.data))
      .catch(erro => { console.log(erro) })
  }

  useEffect(() => {
    produtosQueryApi('http://localhost:8000/plantas/')
  }, [])

  return (
    <>
      <article id="ofertas" className={estilos.ofertas}>
        <header>
          <p>Conheça nossas</p>
          <h2>ofertas</h2>
        </header>
        <section>
          {ofertas.map(plantas => {
            return <div key={plantas.id} className={estilos.card}>
              <img src={plantas.img} alt="" />
              <div className={estilos.detalhes}>
                <h3>{plantas.name}</h3>
                <p>{`R$:${plantas.preco}`}</p>
                <Link href="#">Comprar <FaAngleRight /></Link>
              </div>
            </div>
          })}
        </section>
      </article>
    </>
  )
}
export default Ofertas;
