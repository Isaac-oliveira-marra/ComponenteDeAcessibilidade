import {
  AiOutlineClose,
  AiOutlinePoweroff,
  AiOutlineDrag,
  AiOutlineArrowLeft,
} from 'react-icons/ai'
import { BiBody } from 'react-icons/bi'
import { BsKeyboard, BsFillMoonFill } from 'react-icons/bs'
import { CgDropInvert } from 'react-icons/cg'
import { FaSitemap } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import { MdRecordVoiceOver } from 'react-icons/md'
import { RxFontSize, RxCursorArrow } from 'react-icons/rx'
import { WiMoonAltWaningCrescent3 } from 'react-icons/wi'

import { styled } from '../../../configs'

export const P = styled('p', {
  fontSize: '0.875rem',
  fontFamily: '$openSansNormal',
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

export const Arrow = styled(AiOutlineArrowLeft, {
  fontSize: '1.5625rem',
})

export const PTeste = styled('p', {
  fontSize: '$p4',
})

export const CustomButton = styled('button', {
  borderRadius: '0.625rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginTop: '1.5%',
  fontSize: '$p5',

  variants: {
    size: {
      cursor: {
        width: '45%',
        margin: '1%',
        fontSize: '$p3',
      },
      color: {
        width: '45%',
        margin: '1%',
        fontSize: '$p3',
      },
    },
  },
})

export const ContainerAcessibilidade = styled('div', {
  border: '0.0625rem solid black',
  width: '90%',
  m: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  backgroundColor: 'white',
  zIndex: '10',
  position: 'absolute',
  left: '5%',
  top: '15.5%',
  height: '35rem',
  color: 'black',
  overflowY: 'scroll',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': { width: 10, backgroundColor: '$base_10', borderRadius: 0 },
  '&::-webkit-scrollbar-thumb': {
    width: '0.625rem',
    backgroundColor: '$base_80',
    borderRadius: 0,
    cursor: 'pointer',
  },
  '@md': {
    width: '40%',
    position: 'fixed',
    right: '2%',
    top: '12%',
    left: 'unset',
    height: '85vh',
  },
})

export const ContainerFuncs = styled('div', {
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

export const Person = styled(MdRecordVoiceOver, {
  fontSize: '$h1',
  cursor: 'pointer',
})

export const Header = styled('div', {
  width: '100%',
  backgroundColor: '$primary_100',
  color: '$white',
  display: 'flex',
  justifyContent: 'space-between',
  p: '2%',
  paddingBottom: '3%',
})

export const DragInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
})

export const HeaderRight = styled('div', {
  display: 'flex',
  gap: '0.625rem',
  alignItems: 'center',
  justifyContent: 'center',
})

export const HeaderMobile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '0.0625rem solid black',
  width: '100%',
  backgroundColor: '$primary_100',
  color: '$white',
  padding: '$1',
})

export const ContainerFont = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center',
  mt: '8%',
})

export const ContainerHue = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mt: '2%',
  mb: '2%',
  height: '0.625rem',
  width: '90%',
  position: 'relative',
  right: '-10%',
})

export const HeaderLeft = styled('div', {
  w: '44%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 'auto',
})

export const BtnClose = styled(AiOutlineClose, {
  fontSize: '1.5625rem',
  color: 'white',
  cursor: 'pointer',
})

export const HeaderTitle = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: '$primary_100',
  m: '0 auto',
  borderBottomLeftRadius: '0.3125rem',
  borderBottomRightRadius: '0.3125rem',
  p: '2%',
  fontSize: '$p2',
  fontFamily: '$nunitoNormal',
  color: '$white',

  variants: {
    size: {
      mobile: {
        margin: 'unset',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 'auto',
        backgroundColor: '$primary_100',
        color: '$white',
      },
    },
  },
})

export const Title = styled('p', {
  fontSize: '1.125rem',
  fontWeight: 'bold',
  w: '100%',
  textAlign: 'center',
  mt: '2%',
  mb: '2%',
  fontFamily: '$nunitoNormal',
})

export const ContanerOptions = styled('div', {
  width: '90%',
  m: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$4',
  p: '$4 $2 $4 $2',
  borderRadius: '10px',
  boxShadow: '0rem 0rem 0.1875rem gray',
  variants: {
    field: {
      color: {
        border: 'none',
        boxShadow: 'none',
      },
    },
  },
})

export const MonocromaDiv = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: '$3',
})

export const OptionIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const Option = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: '$0',
  width: '45%',
  flexDirection: 'column',
  minHeight: '10rem',
  cursor: 'pointer',
  fontFamily: '$nunitoNormal',
  borderRadius: '0.625rem',
  boxShadow: '0rem 0rem 0.1875rem gray',
  textAlign: 'center',
  variants: {
    background: {
      blue: {
        backgroundColor: '$primary_100',
        color: '$white',
      },
    },
  },
})

export const Keyboard = styled(BsKeyboard, {
  fontSize: '$h1',
})

export const MicroPhone = styled(HiOutlineSpeakerWave, {
  fontSize: '$h1',
})

export const Moon = styled(WiMoonAltWaningCrescent3, {
  fontSize: '$h1',
})

export const MoonFill = styled(BsFillMoonFill, {
  fontSize: '$h1',
})

export const Map = styled(FaSitemap, {
  fontSize: '$h1',
})

export const Sun = styled(FiSun, {
  fontSize: '$h1',
})

export const ContainerColor = styled('div', {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
})

export const TitleColor = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  fontFamily: '$openSansNormal',
})

export const Drop = styled(CgDropInvert, {
  fontSize: '2.5rem',

  variants: {
    size: {
      mini: {
        fontSize: '1.25rem',
        mr: '0.5rem',
        cursor: 'pointer',
      },
    },
  },
})

export const ColorRight = styled('div', {
  height: '3.125rem',
  width: '80%',
  textAlign: 'left',
  ml: '2%',
})

export const H1 = styled('p', {
  fontSize: '',
  fontWeight: 'bold',
  fontFamily: '$openSansNormal',
})

export const Field = styled('div', {
  width: '45%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$p3',
  ml: '1.5%',
  backgroundColor: '$gray_100',
  mr: '1.5%',
  borderRadius: '0.4375rem',
  p: '0.125rem',
  mt: '2%',
  textAlign: 'center',
  cursor: 'pointer',
  fontFamily: '$openSansNormal',
  height: '$28',

  variants: {
    color: {
      blue: {
        backgroundColor: '$tertiary_100',
        color: '$white',
      },
    },
  },
})

export const ResetColor = styled('div', {
  width: '90%',
  position: 'relative',
  right: '-10%',
  display: 'flex',
  alignItems: 'center',
  mt: '4%',
  mb: '4%',
  fontFamily: '$openSansNormal',
})

export const ResetCursorStyle = styled('div', {
  width: '90%',
  position: 'relative',
  right: '-10%',
  display: 'flex',
  alignItems: 'center',
  mt: '4%',
  fontFamily: '$openSansNormal',
})

export const ResetText = styled('div', {
  width: '90%',
  position: 'relative',
  right: '-10%',
  display: 'flex',
  alignItems: 'center',
  mt: '4%',
  fontFamily: '$openSansNormal',
})

export const TextContainer = styled('div', {
  width: '90%',
  margin: '0 auto',
  border: '0.125rem solid $gray_80',
  fontFamily: '$openSansNormal',
})

export const CursorContainer = styled('div', {
  width: '90%',
  margin: '0 auto',
  border: '0.125rem solid $gray_80',
  marginTop: '5%',
  fontFamily: '$openSansNormal',
})

export const TitleText = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  mb: '2%',
  p: '$2',
})

export const TitleCursor = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  mb: '2%',
  p: '$2',
})

export const Letter = styled(RxFontSize, {
  fontSize: '$h2',

  variants: {
    size: {
      mini: {
        fontSize: '$h5',
        cursor: 'pointer',
        marginRight: '0.5%',
      },
    },
  },
})

export const IconCursor = styled(RxCursorArrow, {
  fontSize: '$h5',

  variants: {
    size: {
      mini: {
        fontSize: '$p3',
        cursor: 'pointer',
      },
    },
  },
})

export const TextRight = styled('div', {
  height: '$h2',
  width: '80%',
  textAlign: 'left',
  ml: '2%',
  mb: '6%',
})

export const CursorRight = styled('div', {
  height: '$h2',
  width: '80%',
  textAlign: 'left',
  ml: '2%',
})

export const OptionsText = styled('div', {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$1',
  justifyContent: 'center',
  alignItems: 'center',
})

export const OptionsCursor = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$2',
})

export const OptionCursor = styled('div', {
  width: '45%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ml: '1.5%',
  backgroundColor: '$gray_100',
  mr: '1.5%',
  borderRadius: '0.4375rem',
  p: '$0',
  mt: '2%',
  textAlign: 'center',
  cursor: 'pointer',
  fontSize: '$p3',

  variants: {
    color: {
      blue: {
        backgroundColor: '$tertiary_100',
        color: '$white',
      },
      white: {
        backgroundColor: '$gray_100',
      },
    },
  },
})

export const OptionText = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$p4',
  backgroundColor: '$gray_100',
  borderRadius: '0.4375rem',
  p: '$1',
  mt: '2%',
  cursor: 'pointer',
  textAlign: 'center',
  minHeight: '$40',
  width: '28%',

  variants: {
    color: {
      blue: {
        backgroundColor: '$tertiary_100',
        color: '$white',
      },
    },
  },
})

export const Footer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$primary_100',
  padding: '$3',
})

export const FooterUp = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$openSansNormal',
})

export const FooterDown = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$nunitoNormal',
})

export const TurnOff = styled('div', {
  display: 'flex',
  color: '$white',
  flexDirection: 'column',
  fontSize: '$p2',
  backgroundColor: 'primary_100',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Off = styled(AiOutlinePoweroff, {
  fontSize: '$p1',
  mr: '0.5%',
  position: 'relative',
  bottom: '-0.125rem',
  cursor: 'pointer',
})

export const PersonIcon = styled(BiBody, {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray_100',
  width: '2.5625rem',
  height: '2.5625rem',
  fontSize: '$h1',
  position: 'fixed',
  right: 0,
  top: '50%',
  padding: '0.625rem',
  borderTopLeftRadius: '0.3125rem',
  borderBottomLeftRadius: '0.3125rem',
  border: '0.1px solid black',
  zIndex: 999,

  variants: {
    position: {
      normal: {
        width: '2.2rem',
        height: '2.2rem',
        border: 0,
        position: 'relative',
        left: 0,
      },
    },
  },
})

export const KeyboardIcon = styled(BsKeyboard, {
  fontSize: '$h1',
  cursor: 'pointer',
})

export const BackgroundAcessibilidade = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: '0rem',
  left: '0rem',

  variants: {
    background: {
      fill: {
        backgroundColor: '$base_60',
      },
    },
    visibility: {
      none: {
        width: '0%',
        height: '0',
        position: 'unset',
        top: 'unset',
        left: 'unset',
      },
    },
  },
})
