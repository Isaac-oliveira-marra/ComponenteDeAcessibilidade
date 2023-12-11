'use client'

import { useState } from 'react'

import { t } from '../../../i18n'

import { Container, CustomButton } from './styles'
type FontSizeProps = {
  option: string
}

type OptionsSize = 'normal' | 'big' | 'grande' | 'medium' | 'médio'

export function FontSize({ option }: FontSizeProps) {
  const [selected, setSelected] = useState<OptionsSize>()

  const arrTags = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'td',
    'tr',
    'span',
    'strong',
    'div',
    'a',
    'li',
  ]

  const setFontSize = (spacing: OptionsSize) => {
    if (spacing === 'normal') {
      for (let i = 0; i < arrTags.length; i++) {
        const tag = document.querySelectorAll<HTMLElement>(arrTags[i])
        Array.from(tag).map(e => {
          return e.style.removeProperty('font-size')
        })
      }
    }

    if (spacing === 'médio' || spacing === 'medium') {
      for (let i = 0; i < arrTags.length; i++) {
        const tag = document.querySelectorAll<HTMLElement>(arrTags[i])
        Array.from(tag).map(e => {
          if (e.classList.contains('notFont')) {
            return null
          } else {
            return (e.style.fontSize = '1.25rem')
          }
        })
      }
    }

    if (spacing === 'grande' || spacing === 'big') {
      for (let i = 0; i < arrTags.length; i++) {
        const tag = document.querySelectorAll<HTMLElement>(arrTags[i])
        Array.from(tag).map(e => {
          if (e.classList.contains('notFont')) {
            return null
          } else {
            return (e.style.fontSize = '1.40rem')
          }
        })
      }
    }
  }

  const setLineHeight = (spacing: OptionsSize) => {
    if (spacing === 'normal') {
      for (let i = 0; i < arrTags.length; i++) {
        const tag = document.querySelectorAll<HTMLElement>(arrTags[i])
        Array.from(tag).map(e => {
          return e.style.removeProperty('line-height')
        })
      }
    }

    if (spacing === 'médio' || spacing === 'medium') {
      for (let i = 0; i < arrTags.length; i++) {
        const tag = document.querySelectorAll<HTMLElement>(arrTags[i])
        Array.from(tag).map(e => {
          return (e.style.lineHeight = '2.5rem')
        })
      }
    }

    if (spacing === 'grande' || spacing === 'big') {
      for (let i = 0; i < arrTags.length; i++) {
        const tag = document.querySelectorAll<HTMLElement>(arrTags[i])
        Array.from(tag).map(e => {
          return (e.style.lineHeight = '2.7rem')
        })
      }
    }
  }

  function ManageText(size: OptionsSize) {
    if (option === 'fontSize') {
      setSelected(size)
      window.localStorage.setItem('sizeOption', size)

      return setFontSize(size)
    }

    if (option === 'lineHeight') {
      setSelected(size)
      window.localStorage.setItem('sizeOption', size)

      return setLineHeight(size)
    }
  }

  return (
    <div>
      <Container>
        <CustomButton
          // variant={
          //   window.localStorage.getItem('sizeOption') === 'normal' &&
          //   selected === 'normal'
          //     ? 'rounded'
          //     : 'outlined'
          // }
          onClick={() => ManageText('normal')}
        >
          {t('Acessibility.Normal')}
        </CustomButton>

        <CustomButton
          // variant={
          //   window.localStorage.getItem('sizeOption') === 'médio' && selected === 'médio'
          //     ? 'rounded'
          //     : 'outlined'
          // }
          onClick={() => ManageText('médio')}
        >
          {t('Acessibility.Medium')}
        </CustomButton>

        <CustomButton
          // variant={
          //   window.localStorage.getItem('sizeOption') === 'grande' &&
          //   selected === 'grande'
          //     ? 'rounded'
          //     : 'outlined'
          // }
          onClick={() => ManageText('grande')}
        >
          {t('Acessibility.Big')}
        </CustomButton>
      </Container>
    </div>
  )
}
