'use client'
import estilos from './Ofertas.module.scss'
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa"
import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import IPlantas from '@/interfaces/IPlantas'

interface IParametrosBusca {
  sorting?: string
  search?: string
  ordering?: string
}

const Ofertas = () => {
  const [ofertas, setOfertas] = useState<IPlantas[]>([])
  const [busca, setBusca] = useState('');
  const [sorting, setSorting] = useState('');
  const [ordering, setOrdering] = useState('');

  const urlDb = 'https://dbvercel.vercel.app/plantas'

  const produtosQueryApi = (url: string) => {
    axios.get<IPlantas[]>(url)
      .then(resposta => setOfertas(resposta.data))
      .catch(erro => { console.log(erro) })
  }

  useEffect(() => {
    produtosQueryApi(`${urlDb}/`)
  }, [])

  const buscar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const opcoes = {
      params: {

      } as IParametrosBusca
    }
    if (busca) {
      opcoes.params.search = busca
      produtosQueryApi(`${urlDb}?name_like=${busca}`)
    } else if (busca == '') {
      produtosQueryApi(`${urlDb}/`)
    }

    if (sorting) {
      opcoes.params.sorting = sorting
      opcoes.params.ordering = ordering
      produtosQueryApi(`${urlDb}?_sort=${sorting}&_order=${ordering}`)
    }
  }

  return (
    <>
      <article id="ofertas" className={estilos.ofertas}>
        <header>
          <p>Conheça nossas</p>
          <h2>ofertas</h2>
        </header>
        <div className={estilos.filtros_container}>
          <form className={estilos.buscar} onSubmit={buscar}>
            <input type="text" value={busca} onChange={evento => setBusca(evento.target.value)} />
          </form>
          <form className={estilos.ordenar} onSubmit={buscar}>
            <select
              name="select-sorting"
              id="select-sorting"
              value={sorting}
              onChange={evento => setSorting(evento.target.value)}
            >
              <option value="">Padrão</option>
              <option value="preco">Por Preço</option>
              <option value="name">Por Nome</option>
            </select>
            <select
              name="select-order"
              id="select-order"
              value={ordering}
              onChange={evento => setOrdering(evento.target.value)}
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
            <button type='submit'>Ordenar</button>
          </form>
        </div>

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
