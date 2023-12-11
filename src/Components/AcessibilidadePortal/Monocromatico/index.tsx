'use client'

import { useState } from 'react'

import { t } from '../../../i18n'

import { Container, Moon } from './styles'

export function Monocromatico() {
  const [open, setOpen] = useState(true)

  function gerenciaFiltro() {
    const monocromaTarget = document.querySelector('.monocromaticTarget') as HTMLElement

    if (open === true) {
      if (monocromaTarget) {
        monocromaTarget.style.filter = 'grayscale(100%)'
        window.localStorage.setItem('monocromatico', 'true')
        setOpen(false)
      }
    }

    if (open === false) {
      if (monocromaTarget) {
        monocromaTarget.style.filter = 'none'
        window.localStorage.setItem('monocromatico', 'false')

        setOpen(true)
      }
    }
  }

  return (
    <div>
      <Container
        background={
          window.localStorage.getItem('monocromatico') === 'true' ? 'blue' : undefined
        }
      >
        <Moon onClick={() => gerenciaFiltro()} />
        <p className='notSpeak'>{t('Acessibility.MONOCHROME')}</p>
      </Container>
    </div>
  )
}
