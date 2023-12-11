import { useState } from 'react'
import Draggable from 'react-draggable'

import { Board, Btn, BtnClose, Drag, DragInfo, Row } from './styles'

let el: HTMLInputElement
let chars: string[] = []

if (typeof document !== 'undefined') {
  document.addEventListener('click', e => {
    const target = e.target as HTMLInputElement

    if (target?.localName === 'textarea' || target?.localName === 'input') {
      el = target
    }

    if (target.classList[2] === 'btn' || target.classList[3] === 'btn') {
      el.value += target?.innerText
      chars = el.value.split('')
    }

    if (target.classList[2] === 'delete') {
      chars.pop()
      el.value = chars.join('')
    }

    if (target.classList[2] === 'space') {
      chars.push(' ')
      el.value = chars.join('')
    }
  })
}

type KeyboardProps = {
  open: boolean
  onChangeOpen: (isOpen: boolean) => void
}

export function Keyboard({ open, onChangeOpen }: KeyboardProps) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  const letters1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '!', '?']

  const letters2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', '@', '"']

  const letters3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', "'", ':']

  const [upper, setUpper] = useState(false)
  const [drag, setDrag] = useState(true)

  const handleDrag = () => {
    setDrag(!drag)
  }

  return (
    <>
      {open && (
        <Draggable disabled={drag} onStop={() => setDrag(!drag)}>
          <Board>
            <DragInfo>
              <p>Arrastar:</p>
              <Drag onClick={() => handleDrag()} state={drag ? 'disable' : 'active'} />
            </DragInfo>
            <BtnClose onClick={() => onChangeOpen(!open)} />
            <Row type='first'>
              {numbers.map((e, i) => {
                return (
                  <Btn size='normal' className='btn' key={i}>
                    {e}
                  </Btn>
                )
              })}
              <Btn size='delete' className='delete'>
                Delete
              </Btn>
            </Row>

            <Row>
              {upper
                ? letters1.map((e, i) => {
                    return (
                      <Btn size='normal' text='big' className='btn' key={i}>
                        {e}
                      </Btn>
                    )
                  })
                : letters1.map((e, i) => {
                    return (
                      <Btn size='normal' className='btn' key={i}>
                        {e}
                      </Btn>
                    )
                  })}
            </Row>

            <Row>
              {upper
                ? letters2.map((e, i) => {
                    return (
                      <Btn size='normal' text='big' className='btn' key={i}>
                        {e}
                      </Btn>
                    )
                  })
                : letters2.map((e, i) => {
                    return (
                      <Btn size='normal' className='btn' key={i}>
                        {e}
                      </Btn>
                    )
                  })}
            </Row>

            <Row>
              <Btn size='caps' className='caps' onClick={() => setUpper(!upper)}>
                Caps
              </Btn>
              {upper
                ? letters3.map((e, i) => {
                    return (
                      <Btn size='normal' text='big' className='btn' key={i}>
                        {e}
                      </Btn>
                    )
                  })
                : letters3.map((e, i) => {
                    return (
                      <Btn size='normal' className='btn' key={i}>
                        {e}
                      </Btn>
                    )
                  })}
            </Row>
            <Row>
              <Btn size='space' className='space'>
                Space
              </Btn>
            </Row>
          </Board>
        </Draggable>
      )}
    </>
  )
}
