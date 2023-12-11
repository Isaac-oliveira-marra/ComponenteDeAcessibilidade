'use client'

import { useEffect, useState } from 'react'

import { t } from '../../../i18n'

import { Container, MicroPhoneIcon } from './styles'

export function TextToVoice() {
  const [voice, setVoice] = useState(false)

  useEffect(() => {
    function setTexto() {
      if (window.localStorage.getItem('voice') === 'true') {
        setVoice(true)

        return document.addEventListener('click', speakText)
      } else if (window.localStorage.getItem('voice') === 'false') {
        setVoice(false)
      }
    }

    setTexto()
  }, [])

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
    'strong',
    'text',
    'li',
  ]

  const speakText = (e: Event) => {
    if ((e.target as HTMLElement).classList.contains('speak')) {
      if (window.localStorage.getItem('i18nextLng') === 'en-US') {
        const teste = new SpeechSynthesisUtterance((e.target as HTMLElement).innerText)
        window.speechSynthesis.cancel()
        teste.lang = 'en-GB'

        return window.speechSynthesis.speak(teste)
      } else {
        const teste = new SpeechSynthesisUtterance((e.target as HTMLElement).innerText)
        window.speechSynthesis.cancel()

        return window.speechSynthesis.speak(teste)
      }
    } else {
      return window.speechSynthesis.cancel()
    }
  }

  function voiceSpeak() {
    if (!voice) {
      for (let i = 0; i < arrTags.length; i++) {
        const tag = document.querySelectorAll<HTMLElement>(arrTags[i])
        Array.from(tag).map(e => {
          if (e.classList.contains('notSpeak')) {
            return null
          } else {
            return e.classList.add('speak')
          }
        })
      }
      window.localStorage.setItem('voice', 'true')
      setVoice(true)
      alert('Clique nos campos destacados para escutar seu conteúdo')

      return document.addEventListener('click', speakText)
    } else {
      for (let i = 0; i < arrTags.length; i++) {
        const tag = document.querySelectorAll<HTMLElement>(arrTags[i])
        Array.from(tag).map(e => {
          return e.classList.remove('speak')
        })
      }
      setVoice(!voice)
      window.localStorage.setItem('voice', 'false')

      return document.removeEventListener('click', speakText)
    }
  }

  return (
    <Container
      onClick={() => voiceSpeak()}
      background={window.localStorage.getItem('voice') === 'true' ? 'blue' : undefined}
    >
      <MicroPhoneIcon />
      <p className='notSpeak'>{t('Acessibility.TEXT READER')}</p>
    </Container>
  )
}
