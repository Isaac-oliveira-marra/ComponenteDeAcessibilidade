import { AiOutlineDrag, AiOutlineClose } from 'react-icons/ai'
import { MdRecordVoiceOver } from 'react-icons/md'

import { styled } from '../../../configs'

export const SpeechContainer = styled('div', {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  position: 'fixed',
  bottom: '0rem',
  right: '5%',
  zIndex: '9',
  backgroundColor: '$primary_100',
  padding: '1.0rem',
  borderRadius: '0.625rem',
  color: '$white',
  width: '90%',
  maxHeight: '600px',
  resize: 'none',
  overflowY: 'scroll',
  paddingTop: '10%',
  '&::-webkit-scrollbar': { width: 10, backgroundColor: '$base_100', borderRadius: 0 },
  '&::-webkit-scrollbar-thumb': {
    width: '0.625rem',
    backgroundColor: '$tertiary_100',
    borderRadius: 0,
    cursor: 'pointer',
  },
  '@md': {
    paddingTop: '5%',
  },

  '@sm': {
    width: '70%',
    right: '20%',
  },
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: '$0',
  flexDirection: 'column',
  fontFamily: '$nunitoNormal',
  borderRadius: '0.625rem',
  boxShadow: '0rem 0rem 0.1875rem $gray_80',
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

export const CustomButton = styled('button', {
  width: '100%',
  height: '2.875rem',
  borderRadius: '0.625rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginTop: '1.5%',

  '@xl': {
    width: '23%',
  },

  '@sm': {
    width: '49%',
  },
})

export const Drag = styled(AiOutlineDrag, {
  fontSize: '1.5625rem',
  color: '$secondary_100',
  cursor: 'pointer',

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

export const TextArea = styled('textarea', {
  width: '99%',
  backgroundColor: 'white',
  color: 'black',
  resize: 'none',
  border: 'none',
  height: '80%',
  fontSize: '$p3',
  fontFamily: '$nunitoRegular',
  padding: '$3',

  '&:focus-visible': {
    outline: 0,
  },
})

export const ContainerButtons = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '3%',
  flexWrap: 'wrap',

  '@sm': {
    flexDirection: 'row',
  },
})

export const Person = styled(MdRecordVoiceOver, {
  fontSize: '$h1',
  cursor: 'pointer',
})

export const ContainerField = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'top',
  fontFamily: '$nunitoRegular',
  flexDirection: 'column',
  '@md': {
    flexDirection: 'row',
  },
})

export const FieldList = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$white',
  fontSize: '$p2',
  height: '70%',
  overflow: 'auto',
  alignItems: 'center',
  '&::-webkit-scrollbar': {
    width: '0.625rem',
    backgroundColor: '$base_10',
    borderRadius: '0rem',
  },
  '&::-webkit-scrollbar-thumb': {
    width: '0.625rem',
    backgroundColor: '$base_60',
    borderRadius: '0rem',
    cursor: 'pointer',
  },
})

export const Field = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  paddingTop: '1.5%',
  borderTop: '0.0625rem solid black',
  paddingBottom: '1.5%',
  fontSize: '$p2',
  textAlign: 'center',
  paddingLeft: '0%',

  '@md': {
    fontSize: '$p3',
  },

  '@sm': {
    textAlign: 'left',
    paddingLeft: '2%',
    justifyContent: 'flex-start',
  },
})

export const TitleTextArea = styled('div', {
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$p2',
  width: '98%',
  paddingTop: '$2',
  paddingBottom: '$1',
  height: '20%',

  '@md': {
    fontSize: '$p3',
  },
})

export const ContainerText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  width: '100%',
  height: '5.5rem',

  '@md': {
    width: '48%',
    height: '11rem',
  },
})

export const TitleTextFields = styled('div', {
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$p2',
  width: '98%',
  paddingTop: '$3',
  paddingBottom: '$3',
  height: '20%',
  position: 'relative',
  margin: '0 auto',
  textAlign: 'center',

  '@md': {
    fontSize: '$p3',
  },

  '@sm': {
    textAlign: 'left',
  },
})

export const ContainerFields = styled('div', {
  backgroundColor: '$white',
  width: '100%',
  marginBottom: '15%',

  '@md': {
    width: '48%',
    height: '10rem',
    marginBottom: '0rem',
  },
})

export const BtnClose = styled(AiOutlineClose, {
  fontSize: '1.875rem',
  position: 'absolute',
  top: '0.3125rem',
  right: '0.3125rem',
  color: '$white',
  cursor: 'pointer',
})
