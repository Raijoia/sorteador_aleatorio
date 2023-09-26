import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaDeParticipantesState)
  const list = useRecoilValue(listaDeParticipantesState)
  const setErro = useSetRecoilState(erroState)

  return (nomeDoParticipante: string) => {
    if (list.includes(nomeDoParticipante)) {
      setErro("nomes duplicados não são permitidos")
      setTimeout(() => {
        setErro('')
      }, 5000)
      return 
    }
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  }
}