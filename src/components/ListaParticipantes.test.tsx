import { render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./ListaParticipantes"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

// fingindo
jest.mock("../state/hook/useListaDeParticipantes", () => {
  return {
    // falando para se comportar como uma function
    useListaDeParticipantes: jest.fn()
  }
})

describe('uma lista vazia de participantes', () => {
  // dizendo para fingir ter uma array vazia
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })

  test('deve ser renderizada com elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    // item de lista ja tem essa role por padrão
    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(0)
  })
})

describe("uma lista preenchida de participantes", () => {
  // dizendo para fingir ter uma lista de participantes
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  })

  // simulando uma lista de participantes
  const participantes = ['Raí', 'Julia']

  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole("listitem")
    expect(itens).toHaveLength(participantes.length)
  })
})