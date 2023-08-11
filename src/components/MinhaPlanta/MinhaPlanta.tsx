import estilos from "./MinhaPlanta.module.scss"


const MinhaPlanta = () => {
  return (
    <>
      <div className={estilos.planta_container}>
        <div className={estilos.minha_planta}></div>
        <article className={estilos.como_conseguir}>
          <header>
            <p>Como conseguir</p>
            <br />
            <h2>minha planta</h2>
          </header>
          <section className={estilos.lista}>
            <ul>
              <li><div className={estilos.circulo}></div> <p>Escolha suas plantas</p></li>
              <li><div className={estilos.circulo}></div> <p>Faça seu pedido</p></li>
              <li><div className={estilos.circulo}></div> <p>Aguarde na sua casa</p></li>
            </ul>
          </section>
        </article>
      </div>
    </>
  )
}

export default MinhaPlanta