import { AiOutlineDrag, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'

import { styled } from '../../../configs'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: '$0',
  flexDirection: 'column',
  fontFamily: '$nunitoNormal',
  borderRadius: '0.625rem',
  boxShadow: '0rem 0rem 0.1875rem gray',
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

export const MicroPhoneIcon = styled(HiOutlineSpeakerWave, {
  fontSize: '$h1',
  cursor: 'pointer',
})

export const VoiceContainer = styled('div', {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  position: 'fixed',
  bottom: '0rem',
  right: '1.25rem',
  zIndex: '9',
  backgroundColor: '$primary_100',
  padding: '1.25rem',
  borderRadius: '0.625rem',
  color: '$white',
  width: '80%',
  '@md': {
    width: '50%',
  },

  '@lg': {
    width: '30%',
  },
})

export const Itens = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5%',
  flexDirection: 'column',

  '@md': {
    flexDirection: 'row',
  },
})

export const Drag = styled(AiOutlineDrag, {
  fontSize: '1.5625rem',
  color: 'red',

  variants: {
    state: {
      active: {
        color: '$secondary_100',
      },
      disable: {
        color: '$white',
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
})

export const CustonButton = styled('button', {
  width: '50%',
  borderRadius: '0.625rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '3.675rem',

  '@md': {
    width: '30%',
  },
})

export const TextArea = styled('textarea', {
  width: '80%',
  borderRadius: '0.625rem',
  padding: '0.625rem',
  fontFamily: '$nunitoNormal',
  resize: 'none',
  marginRight: '3%',
  marginBottom: '5%',
  height: '4rem',
  zIndex: 9,

  '@md': {
    marginBottom: '0rem',
    width: '70%',
    height: 'auto',
  },

  '&:focus-visible': {
    outline: 0,
  },
})

export const BtnClose = styled(AiOutlineClose, {
  fontSize: '1.875rem',
  position: 'absolute',
  top: '0.3125rem',
  right: '0.3125rem',
  color: '$white',
})
