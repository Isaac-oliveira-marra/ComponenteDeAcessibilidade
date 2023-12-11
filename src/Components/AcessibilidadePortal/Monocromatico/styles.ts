import { WiMoonAltWaningCrescent3 } from 'react-icons/wi'

import { styled } from '../../../configs'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$5',
  flexDirection: 'column',
  fontFamily: '$nunitoNormal',
  borderRadius: '0.625rem',
  boxShadow: '0rem 0rem 0.1875rem gray',
  textAlign: 'center',
  width: '100%',
  minHeight: '10rem',
  cursor: 'pointer',
  variants: {
    background: {
      blue: {
        backgroundColor: '$primary_100',
        color: '$white',
      },
    },
  },
})

export const Moon = styled(WiMoonAltWaningCrescent3, {
  fontSize: '$h1',
})
