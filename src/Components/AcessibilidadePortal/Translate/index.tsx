'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  BackGround,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  ArrowDown,
  TranslateMobile,
  Button,
} from './styles'

type TranslateProps = {
  size?: 'mobile'
}

export function Translate({ size }: TranslateProps) {
  const { i18n } = useTranslation()

  const [title, setTitle] = useState(
    i18n.language === 'pt-BR' ? 'Português (Brasileiro)' : 'English'
  )

  const traduzir = (lng: string) => {
    if (lng === 'en-US') {
      window.location.reload()
      i18n.changeLanguage('en-US')
      setTitle('English')

      if (window.localStorage.getItem('voice') === 'true') {
        window.localStorage.setItem('voice', 'false')
      }
    } else {
      window.location.reload()
      i18n.changeLanguage('pt-BR')
      setTitle('Português (Brasileiro)')

      if (window.localStorage.getItem('voice') === 'true') {
        window.localStorage.setItem('voice', 'false')
      }
    }
  }

  return (
    <div>
      {size === 'mobile' ? (
        <TranslateMobile>
          <Button
            selected={
              window.localStorage.getItem('i18nextLng') === 'pt-BR' ? 'true' : undefined
            }
            onClick={() => traduzir('pt-BR')}
          >
            <p className='notSpeak'>Portugues</p>
          </Button>
          <Button
            selected={
              window.localStorage.getItem('i18nextLng') === 'en-US' ? 'true' : undefined
            }
            onClick={() => traduzir('en-US')}
          >
            <p className='notSpeak'>Ingles</p>
          </Button>
        </TranslateMobile>
      ) : (
        <BackGround>
          <Dropdown>
            <DropdownTrigger asChild>
              <p className='notSpeak'>
                {title} <ArrowDown />
              </p>
            </DropdownTrigger>
            <DropdownContent sideOffset={5}>
              <DropdownItem onClick={() => traduzir('pt-BR')}>
                <p className='notSpeak'>Português (Brasileiro)</p>
              </DropdownItem>
              <DropdownItem onClick={() => traduzir('en-US')}>
                <p className='notSpeak'>English</p>
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
        </BackGround>
      )}
    </div>
  )
}
