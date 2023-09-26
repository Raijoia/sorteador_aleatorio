import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaDeParticipantesState)
  const list = useRecoilValue(listaDeParticipantesState)
  const setErro = useSetRecoilState(erroState)

  return (nomeDoParticipante: string) => {
    if (list.includes(nomeDoParticipante)) {
      setErro("nomes duplicados não são permitidos")
      return 
    }
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  }
}