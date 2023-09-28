import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

import './Rodape.module.scss'
import { useSorteador } from "../state/hook/useSorteador"

const Rodape = () => {
  const participantes = useListaDeParticipantes()
  
  const navegarPara = useNavigate()

  const sortear = useSorteador()

  const iniciar = () => {
    sortear()
    navegarPara('/sorteio')
  }

  return (
    <footer className='rodape-configuracoes'>
      <button className="botao" disabled={participantes.length < 3 ? true : false} onClick={iniciar}>Iniciar brincadeira</button>
    </footer>
  )
}

export default Rodape