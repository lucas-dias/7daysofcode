import Image from "next/image"
import estilos from "./page.module.scss"
import logo from "/public/images/logo.png"

const Header = () => {
  return (
    <div className={estilos['nav-bar']}>
      <Image src={logo} alt="Logo 7DoC" loading="lazy" />
      <ul>
        <li>Como fazer /</li>
        <li>Ofertas /</li>
        <li>Depoimentos /</li>
        <li>Vídeos /</li>
        <li>Meu Carrinho</li>
      </ul>
    </div>
  )
}

export default Header