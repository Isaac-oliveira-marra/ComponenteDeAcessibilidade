import { IoIosArrowDown } from 'react-icons/io'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { styled } from '../../../configs'

export const P = styled('p', {
  color: 'black',
})

export const BackGround = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  variants: {
    size: {
      mobile: {
        position: 'absolute',
        top: '1px',
        right: '0.9375rem',
        '@xs': {
          top: '5px',
        },
        '@sm': {
          top: '8px',
        },
      },
    },
  },
})

export const Dropdown = styled(DropdownMenu, {})

export const DropdownTrigger = styled(DropdownMenuTrigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: 'auto',
  backgroundColor: '$info_40',
  p: '$0',
  borderRadius: '15%',
  fontFamily: '$openSansNormal',
  cursor: 'pointer',
  color: 'white',

  variants: {
    size: {
      mobile: {
        backgroundColor: '$info_100',
      },
    },
  },
})
export const DropdownContent = styled(DropdownMenuContent, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  boxShadow: '0rem 0rem 0.1875rem $gray_80',
})
export const DropdownItem = styled(DropdownMenuItem, {
  width: '12.5rem',
  display: 'flex',
  justifyContent: 'center',
  mb: '3%',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '$white',
  boxShadow: '0rem 0rem 0.1875rem $gray_80',
  cursor: 'pointer',
  '&:hover': {
    cursor: 'pointer',
  },
})

export const Button = styled('button', {
  border: 0,
  background: 'none',
  width: '50%',
  cursor: 'pointer',
  color: 'black',
  fontFamily: '$nunitoNormal',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$1',

  variants: {
    selected: {
      true: {
        backgroundColor: '$primary_80',
        color: '$white',
      },
    },
  },
})

export const ArrowDown = styled(IoIosArrowDown, {
  fontSize: '$p4',
  marginLeft: '0.3125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  top: '0.1875rem',
})

export const TranslateMobile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '5px',
  backgroundColor: '$white',
  borderRadius: '5px',
  color: 'black',
})
