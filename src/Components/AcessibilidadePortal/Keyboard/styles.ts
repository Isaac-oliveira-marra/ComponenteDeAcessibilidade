import { AiOutlineDrag, AiOutlineClose } from 'react-icons/ai'
import { BsKeyboard } from 'react-icons/bs'

import { styled } from '../../../configs'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: '$0',
  flexDirection: 'column',
  fontFamily: '$nunitoNormal',
  borderRadius: '0.625rem',
  boxShadow: '0px 0px 0.1875rem gray',
  textAlign: 'center',
  width: '45%',
  minHeight: '10rem',

  variants: {
    background: {
      blue: {
        backgroundColor: '$primary_100',
        color: '$white',
      },
    },
  },
})

export const Option = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const KeyboardIcon = styled(BsKeyboard, {
  fontSize: '$h1',
  cursor: 'pointer',
})

export const Board = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  position: 'fixed',
  bottom: '0rem',
  left: '1.25rem',
  zIndex: '9',
  border: '0.125rem solid black',
  backgroundColor: '$primary_100',
  p: '$2',
  borderRadius: '0.625rem',
  width: 'auto',
})

export const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  variants: {
    type: {
      first: {
        paddingTop: '5%',
      },
    },
  },
})

export const Btn = styled('button', {
  backgroundColor: '$info_100',
  border: 'none',
  padding: '.5rem 1rem',
  margin: '.3rem',
  fontSize: '1.3rem',
  color: '$white',
  height: '2.25rem',
  cursor: 'pointer',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    size: {
      normal: { width: '1.25rem', '@lg': { width: '3.25rem', height: '3.25rem' } },
      delete: { width: '6.5rem', '@lg': { height: '3.25rem' } },
      caps: { width: '5rem', '@lg': { height: '3.25rem' } },
      space: { width: '21.875rem', '@lg': { height: '3.25rem' } },
    },
    text: {
      normal: { textTransform: 'lowercase' },
      big: { textTransform: 'uppercase' },
    },
  },
})

export const Drag = styled(AiOutlineDrag, {
  fontSize: '1.5625rem',
  color: 'red',
  cursor: 'pointer',

  variants: {
    state: {
      active: {
        color: 'red',
      },
      disable: {
        color: 'white',
      },
    },
  },
})

export const DragInfo = styled('div', {
  position: 'absolute',
  top: '0.3125rem',
  left: '0.3125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
})

export const BtnClose = styled(AiOutlineClose, {
  fontSize: '1.875rem',
  position: 'absolute',
  top: '0.3125rem',
  right: '0.3125rem',
  color: '$white',
  cursor: 'pointer',
})
