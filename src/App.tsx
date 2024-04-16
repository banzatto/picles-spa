
import { useState } from 'react'
import {Button} from './components/common/Button'
import { ButtonVariant } from './components/common/Button/Button.constants'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button variant = {ButtonVariant.Default} onClick={() => setCount((count) => count + 1)}>
      count is {count} Sou adotado
    </Button>
    <Button variant = {ButtonVariant.Outlined}>
      count is {count} Quero adotar
    </Button>
    <Button variant = {ButtonVariant.Disabled}>
      count is {count} Quero adotar
    </Button>
    <Button variant = {ButtonVariant.Text}>
      count is {count} Quero adotar
    </Button>
    <Button >
      count is {count} Tipo default
    </Button>
    </>
  )
}
