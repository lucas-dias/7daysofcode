'use client'
import Image from "next/image"
import estilos from "./page.module.scss"
import planta from "/public/images/hero_index.png"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import { useForm } from 'react-hook-form'

const Cta = () => {
  const FormSchema = z.object({
    userEmail: z.string()
      .nonempty("O e-mail é obrigatório")
      .email({
        message: 'Insira um formato de e-mail válido'
      })
  })
  type FormSchemaData = z.infer<typeof FormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSchemaData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userEmail: ''
    }
  })

  async function onSubmit(data: any) {
    let mail = JSON.stringify(data.userEmail, null, 1);
    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mail)
    });
  }
  const onError = (errors: any, e: any) => console.log(errors, e)

  return (
    <div className={estilos.center}>
      <div className={estilos.texto_cta}>
        <p>Sua casa com as</p>
        <h2>melhores<br />plantas</h2>
        <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.</p>
        <p>Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        <form className={estilos.newsletter} onSubmit={handleSubmit(onSubmit, onError)}>
          <input {...register("userEmail")} type="email" id="userEmail" placeholder="Insira seu e-mail" />

          <button>Assinar Newsletter</button>
          {errors?.userEmail?.message && <p className={estilos.error_p}>{errors?.userEmail?.message}</p>}
        </form>
      </div>
      <Image src={planta} alt="Vaso de plantas" />
    </div>
  )
}

export default Cta