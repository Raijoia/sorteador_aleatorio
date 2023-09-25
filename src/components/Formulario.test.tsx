import { render, screen } from "@testing-library/react"
import React from "react"
import Formulario from "./Formulario"

// "oque testa"
test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
  // qual component quer renderizar
  render(<Formulario />)

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText("Inisira o nome do participante")

  // encontrar o botão
  const botao = screen.getByRole("button")

  // garantir que o input esteja no documento
  expect(input).toBeInTheDocument()

  // garantir que o botão esteja desabilitado
  expect(botao).toBeDisabled()
})