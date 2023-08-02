import Image from "next/image"
import estilos from "./page.module.scss"
import planta from "/public/images/hero_index.png"

const Cta = () => {
  return (
    <div className={estilos.center}>
      <div className={estilos.texto_cta}>
        <p>Sua casa com as</p>
        <h2>melhores<br />plantas</h2>
        <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.</p>
        <p>Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        <div className={estilos.newsletter}>
          <input type="text" placeholder="Insira seu e-mail" />
          <img src="/images/mail.svg" alt="ícone de e-mail" />
          <button>Assinar Newsletter</button>
        </div>
      </div>
      <Image src={planta} alt="Vaso de plantas" />
    </div>
  )
}

export default Cta