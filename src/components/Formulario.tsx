import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hook/useAdicionarParticipante"
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro"

const Formulario = () => {

  const [nome, setNome] = useState('')

  // para mudar o foco para o input, precisa começar como null
  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()
  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    adicionarNaLista(nome)

    setNome('')

    // definindo o foco para o input
    inputRef.current?.focus()
  }

  

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        // declarando que o input tem um ref
        ref={inputRef}
        type="text"
        placeholder="Inisira o nome do participante"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
      <button disabled={!nome}>Adicionar</button>
      {mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
    </form>
  )
}

export default Formulario