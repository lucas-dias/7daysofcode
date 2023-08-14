import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import estilos from "./Footer.module.scss"

const Footer = () => {
  return (
    <>
      <footer className={estilos.footer}>
        Desenvolvido por<Link href="https://github.com/lucas-dias" target="_blank" rel="noopener">&nbsp;<FaGithub /> Lucas Dias,</Link>&nbsp;para o desafio 7DaysofCode da <Link href="https://www.alura.com.br" target="_blank" rel="noopener">&nbsp;Alura.</Link>
      </footer>
    </>
  )
}

export default Footer