'use client'

import { SetStateAction, useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import { t } from '../../../i18n'

import {
  ContainerButtons,
  ContainerField,
  ContainerFields,
  CustomButton,
  Drag,
  DragInfo,
  Field,
  FieldList,
  SpeechContainer,
  TitleTextFields,
} from './styles'

export type Campos = {
  id: string
  comando: string
}

export type Referencias = {
  id: string
  comando: string
}

type SpeechProps = {
  open: boolean
  onChangeOpen: (isOpen: boolean) => void
}

export function Speech({ open, onChangeOpen }: SpeechProps) {
  const [campos, setCampos] = useState<Campos[]>([])
  const [referencias, setReferencias] = useState<Referencias[]>([])
  const [drag, setDrag] = useState(true)

  useEffect(() => {
    function retornaInputs() {
      const inputs = document.body.querySelectorAll('input')
      const textAreas = document.body.querySelectorAll('textarea')
      const areasReferencia = document.body.querySelectorAll('.areaReferencia')
      const arrFiltradoCampos: SetStateAction<Campos[]> = []
      const arrFiltradoReferencias: SetStateAction<Referencias[]> = []
      const arrInputs = Array.from(inputs)
      const arrTextAreas = Array.from(textAreas)
      const arrReferencias = Array.from(areasReferencia)
      console.log(arrReferencias)
      arrInputs.map((e, i) => {
        if (e.getAttribute('placeholder')) {
          return e.setAttribute('id', `input${i}`)
        } else {
          return null
        }
      })
      arrInputs.map(e => {
        if (e.getAttribute('placeholder')) {
          return arrFiltradoCampos.push({
            comando: e.placeholder.toLowerCase(),
            id: e.id,
          })
        } else {
          return null
        }
      })
      arrTextAreas.map((e, i) => {
        if (e.getAttribute('placeholder')) {
          return e.setAttribute('id', `textarea${i}`)
        } else {
          return null
        }
      })
      arrTextAreas.map(e => {
        if (e.getAttribute('placeholder')) {
          return arrFiltradoCampos.push({
            comando: e.placeholder.toLowerCase(),
            id: e.id,
          })
        } else {
          return null
        }
      })
      arrReferencias.map((e, i) => {
        if (e instanceof HTMLElement && e.innerText) {
          return e.setAttribute('id', `referencia${i}`)
        } else {
          return null
        }
      })
      arrReferencias.map(e => {
        if (e instanceof HTMLElement && e.innerText) {
          return arrFiltradoReferencias.push({
            comando: e.innerText.toLowerCase(),
            id: e.id,
          })
        } else {
          return null
        }
      })

      setCampos(arrFiltradoCampos)
      setReferencias(arrFiltradoReferencias)
    }

    retornaInputs()
  }, [])

  console.log(campos)
  console.log(referencias)

  const calback = (id: string) => {
    const component = document.getElementById(`${id}`) as HTMLInputElement
    const posicao = component.getBoundingClientRect().top + window.scrollY - 200
    window.scrollTo({ top: posicao, behavior: 'smooth' }) // Para uma animação de rolagem suave
    resetTranscript()
  }

  function startListening() {
    SpeechRecognition.startListening({ continuous: true })
  }

  const handleDrag = () => {
    setDrag(!drag)
  }

  function offComponent() {
    SpeechRecognition.stopListening()
    resetTranscript()
    onChangeOpen(false)
  }

  const arrayComandos = campos.concat(referencias)

  console.log('aqui', arrayComandos)

  const commands = arrayComandos.map(field => {
    return {
      command: field.comando.toLowerCase(),
      callback: () => calback(field.id),
      matchInterim: true,
    }
  })
  const { resetTranscript, transcript } = useSpeechRecognition({ commands })

  console.log(transcript)

  return (
    <>
      {open && (
        <Draggable disabled={drag} onStop={() => setDrag(!drag)}>
          <SpeechContainer>
            <DragInfo>
              <p>{t('Acessibility.DRAG')}</p>
              <Drag onClick={() => handleDrag()} state={drag ? 'disable' : 'active'} />
            </DragInfo>
            <ContainerField>
              <ContainerFields>
                <TitleTextFields>
                  {t('Acessibility.FIELDS AVAILABLE ON THE PAGE')}
                </TitleTextFields>
                <FieldList>
                  {campos.map((e, i) => {
                    return (
                      <Field key={i}>
                        {t('Acessibility.SAY THIS')} {e.comando}
                      </Field>
                    )
                  })}
                </FieldList>
              </ContainerFields>
              <ContainerFields>
                <TitleTextFields>{t('Acessibility.Relevant sections')}</TitleTextFields>
                <FieldList>
                  {referencias.map((e, i) => {
                    return (
                      <Field key={i}>
                        {t('Acessibility.SAY THIS')} {e.comando}
                      </Field>
                    )
                  })}
                </FieldList>
              </ContainerFields>
            </ContainerField>
            <ContainerButtons>
              <CustomButton color='info' onClick={() => startListening()}>
                {t('Acessibility.START')}
              </CustomButton>
              <CustomButton color='danger' onClick={() => offComponent()}>
                {t('Acessibility.TURN OFF')}
              </CustomButton>
            </ContainerButtons>
          </SpeechContainer>
        </Draggable>
      )}
    </>
  )
}
