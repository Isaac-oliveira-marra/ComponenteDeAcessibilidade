'use-client'

import { HuePicker } from 'react-color'

export function ColorPicker() {
  const cor = '#fff'

  function changeColorText(color: string) {
    const arrTags = [
      // eslint-disable-next-line prettier/prettier
      'h1','h2','h3','h4','h5','h6','p','td','tr','span','strong','text','div','ul','li','svg','button','a',
    ]

    for (let i = 0; i < arrTags.length; i++) {
      const tag = document.querySelectorAll<HTMLElement>(arrTags[i])
      Array.from(tag).map(e => {
        return (e.style.color = color)
      })
    }
  }

  return (
    <HuePicker
      width='100%'
      height='100%'
      color={cor}
      onChange={(color: { hex: string }) => changeColorText(color.hex)}
    />
  )
}
