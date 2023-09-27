import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

import './Rodape.module.scss'

const Rodape = () => {
  const participantes = useListaDeParticipantes()
  
  const navegarPara = useNavigate()

  const iniciar = () => {
    navegarPara('/sorteio')
  }

  return (
    <footer className='rodape-configuracoes'>
      <button className="botao" disabled={participantes.length < 3 ? true : false} onClick={iniciar}>Iniciar brincadeira</button>
    </footer>
  )
}

export default Rodape