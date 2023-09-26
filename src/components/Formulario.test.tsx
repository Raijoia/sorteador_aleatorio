import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Formulario from "./Formulario"
import { RecoilRoot } from "recoil"

// "oque testa"
test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  // qual component quer renderizar
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  )

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText("Inisira o nome do participante")

  // encontrar o botão
  const botao = screen.getByRole("button")

  // garantir que o input esteja no documento
  expect(input).toBeInTheDocument()

  // garantir que o botão esteja desabilitado
  expect(botao).toBeDisabled()
})

test("adicionar um participante caso exista um nome preenchido", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  )
  const input = screen.getByPlaceholderText("Inisira o nome do participante")
  const botao = screen.getByRole("button")

  // inserir um valor no input
  fireEvent.change(input, {
    // nome do participante, simulando que o usuário digitou
    target: {
      value: "Raí"
    }
  })

  // clicar no botão de submeter
  fireEvent.click(botao)

  // garantir que o input esteja com o foco ativo
  // expect => esperado, se espera que o elemento
  expect(input).toHaveFocus()

  // garantir que o input não tenha um valor
  expect(input).toHaveValue("")
})

test("nomes duplicados não podem ser adicionados na lista", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  )
  const input = screen.getByPlaceholderText("Inisira o nome do participante")
  const botao = screen.getByRole("button")

  // 1° vez
  fireEvent.change(input, {
    target: {
      value: "Raí",
    },
  })

  fireEvent.click(botao)

  // 2° vez
  fireEvent.change(input, {
    target: {
      value: "Raí",
    },
  })

  fireEvent.click(botao)

  const mensagemDeErro = screen.getByRole('alert')

  expect(mensagemDeErro.textContent).toBe('nomes duplicados não são permitidos')
})
