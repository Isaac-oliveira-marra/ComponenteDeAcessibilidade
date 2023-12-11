'use client'

import { useEffect, useState } from 'react'

import { BreakpointsEnum } from '../../../types/enums'
import { t } from '../../../i18n'

import { ColorPicker } from '../ColorPicker'
import { FontSize } from '../FontSize'
import { Monocromatico } from '../Monocromatico'
import { Speech } from '../Speech'
import { TextToVoice } from '../TextToVoice'
import { Translate } from '../Translate'

import {
  ContainerAcessibilidade,
  Title,
  ContanerOptions,
  ContainerColor,
  TitleColor,
  Drop,
  ColorRight,
  H1,
  ResetColor,
  TextContainer,
  TitleText,
  Letter,
  TextRight,
  P,
  OptionsText,
  Footer,
  ContainerHue,
  ContainerFont,
  CursorContainer,
  TitleCursor,
  IconCursor,
  CursorRight,
  OptionsCursor,
  ResetCursorStyle,
  BtnClose,
  PersonIcon,
  ResetText,
  ContainerFuncs,
  OptionIcon,
  Person,
  CustomButton,
  HeaderRight,
  Header,
  HeaderMobile,
  HeaderTitle,
  Arrow,
  MonocromaDiv,
  TurnOff,
  FooterDown,
} from './styles'

export function Acessibilidade() {
  const [textOption, setTextOption] = useState('')
  const [cursorOption, setCursorOption] = useState('')
  const [sizeOption, setSizeOption] = useState('')
  const textOptions = [t('Acessibility.FONT SIZE'), t('Acessibility.LINE SPACING')]
  const [acessibility, setAcessibility] = useState(false)
  const [openSpeach, setOpenSpeach] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize())
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
    'span',
  ]

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  function getWindowSize() {
    const { innerWidth, innerHeight } = window

    return { innerWidth, innerHeight }
  }

  function controlAcessibility() {
    if (acessibility === true) {
      setOpenSpeach(false)
      setAcessibility(false)
    } else {
      setOpenSpeach(false)
      setAcessibility(true)
    }
  }

  const controlSpeach = () => {
    if (openSpeach === false) {
      setAcessibility(false)
      setOpenSpeach(true)
    } else {
      setOpenSpeach(false)
    }
  }

  function ColorTextDefault() {
    const localArrTags = arrTags
    localArrTags.push('div')
    localArrTags.push('ul')
    localArrTags.push('li')
    localArrTags.push('svg')
    localArrTags.push('button')
    localArrTags.push('a')

    for (let i = 0; i < localArrTags.length; i++) {
      const tag = document.querySelectorAll<HTMLElement>(localArrTags[i])
      Array.from(tag).map(e => {
        return e.style.removeProperty('color')
      })
    }
  }

  function ColorDefault() {
    return ColorTextDefault()
  }

  function ChangeCursorWhite() {
    document.body.removeAttribute('class')
    setCursorOption('white')

    return document.body.setAttribute('class', 'white')
  }

  function ChangeCursorBlack() {
    document.body.removeAttribute('class')
    setCursorOption('black')

    return document.body.setAttribute('class', 'black')
  }

  function textDefault() {
    const localArrTags = arrTags
    localArrTags.push('div')
    localArrTags.push('a')
    localArrTags.push('li')

    for (let i = 0; i < localArrTags.length; i++) {
      const tag = document.querySelectorAll<HTMLElement>(localArrTags[i])
      Array.from(tag).map(e => {
        return e.style.removeProperty('line-height')
      })
    }

    for (let i = 0; i < localArrTags.length; i++) {
      const tag = document.querySelectorAll<HTMLElement>(localArrTags[i])
      Array.from(tag).map(e => {
        return e.style.removeProperty('font-size')
      })
    }

    setSizeOption('')
    window.localStorage.setItem('sizeOption', 'null')

    return setTextOption('')
  }

  function ResetCursor() {
    document.body.removeAttribute('class')
    document.body.removeAttribute('class')
    setCursorOption('')
  }

  function changeText(option: string) {
    if (option === 'Tamanho da fonte') {
      setTextOption('Tamanho da fonte')

      return setSizeOption('fontSize')
    }

    if (option === 'Font size') {
      setTextOption('Font size')

      return setSizeOption('fontSize')
    }

    if (option === 'Espaço entre linhas') {
      setTextOption('Espaço entre linhas')

      return setSizeOption('lineHeight')
    }

    if (option === 'Line spacing') {
      setTextOption('Line spacing')

      return setSizeOption('lineHeight')
    }
  }

  if (acessibility) {
    return (
      <div>
        <Speech open={openSpeach} onChangeOpen={() => setOpenSpeach(!openSpeach)} />
        <div>
          <ContainerAcessibilidade>
            {windowSize.innerWidth < BreakpointsEnum.md ? (
              <HeaderMobile>
                <Arrow onClick={() => controlAcessibility()} />
                <Translate size='mobile' />
              </HeaderMobile>
            ) : (
              <div>
                <Header>
                  <Translate />
                  <HeaderRight>
                    <BtnClose onClick={() => controlAcessibility()} />
                  </HeaderRight>
                </Header>
                <HeaderTitle>
                  <p className='notSpeak'>{t('Acessibility.ACESSIBILITY')}</p>
                </HeaderTitle>
              </div>
            )}
            <Title className='notSpeak'>
              {t('Acessibility.VOICE ADJUSTMENT AND NAVIGATION')}
            </Title>
            <ContanerOptions>
              <TextToVoice />
              <ContainerFuncs onClick={() => controlSpeach()}>
                <OptionIcon>
                  <Person />
                  <p className='notSpeak'>{t('Acessibility.VOICE SEARCH')}</p>
                </OptionIcon>
              </ContainerFuncs>
            </ContanerOptions>

            <Title className='notSpeak'>{t('Acessibility.COLOR ADJUSTMENT')}</Title>

            <ContanerOptions>
              <ContainerColor>
                <TitleColor>
                  <Drop />
                  <ColorRight>
                    <H1 className='notSpeak'>{t('Acessibility.CUSTOM COOLOR')}</H1>
                    <p className='notSpeak'>{t('Acessibility.CHANGE WEBSITE COLORS')}</p>
                  </ColorRight>
                </TitleColor>

                <ResetColor>
                  <Drop size={'mini'} onClick={() => ColorDefault()} />
                  <p className='notSpeak'>{t('Acessibility.RESET COLORS')}</p>
                </ResetColor>

                <ContainerHue>
                  <ColorPicker />
                </ContainerHue>

                <MonocromaDiv>
                  <Monocromatico />
                </MonocromaDiv>
              </ContainerColor>
            </ContanerOptions>

            <Title className='notSpeak'>{t('Acessibility.CONTENT ADJUSTMENT')}</Title>

            <TextContainer>
              <TitleText>
                <Letter />
                <TextRight>
                  <H1 className='notSpeak'>{t('Acessibility.FONT TWEAKS')}</H1>
                  <P className='notSpeak'>
                    {t('Acessibility.INCREASE AND DECREASE FONT SIZE')}
                  </P>
                </TextRight>

                <OptionsText>
                  {textOptions.map((option, index) => (
                    <CustomButton
                      // variant={textOption === option ? 'rounded' : 'outlined'}
                      key={index}
                      onClick={() => changeText(option)}
                    >
                      {option}
                    </CustomButton>
                  ))}
                </OptionsText>

                <ResetText>
                  <Letter size='mini' onClick={() => textDefault()} />
                  <p className='notSpeak'>{t('Acessibility.RESET FONT')}</p>
                </ResetText>

                <ContainerFont>
                  <FontSize option={sizeOption} />
                </ContainerFont>
              </TitleText>
            </TextContainer>
            {windowSize.innerWidth < BreakpointsEnum.md ? null : (
              <CursorContainer>
                <TitleCursor>
                  <IconCursor />
                  <CursorRight>
                    <H1 className='notSpeak'>{t('Acessibility.CURSOR')}</H1>
                    <P className='notSpeak'>
                      {t('Acessibility.MAGNIFY THE CURSOR AND CHANGE ITS COLOR')}
                    </P>
                  </CursorRight>
                  <OptionsCursor>
                    <CustomButton
                      // variant={cursorOption === 'white' ? 'rounded' : 'outlined'}
                      onClick={() => ChangeCursorWhite()}
                    >
                      <p className='notSpeak'>{t('Acessibility.WHITE')}</p>
                    </CustomButton>
                    <CustomButton
                      // variant={cursorOption === 'black' ? 'rounded' : 'outlined'}
                      onClick={() => ChangeCursorBlack()}
                    >
                      <p className='notSpeak'>{t('Acessibility.BLACK')}</p>
                    </CustomButton>
                  </OptionsCursor>

                  <ResetCursorStyle>
                    <IconCursor size={'mini'} onClick={() => ResetCursor()} />
                    <p className='notSpeak'>{t('Acessibility.RESET CURSOR')}</p>
                  </ResetCursorStyle>
                </TitleCursor>
              </CursorContainer>
            )}
            <Footer>
              <TurnOff>
                <FooterDown>
                  <p>Powered by Unipam</p>
                </FooterDown>
              </TurnOff>
            </Footer>
          </ContainerAcessibilidade>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        {windowSize.innerWidth < BreakpointsEnum.lg ? (
          <PersonIcon position='normal' onClick={() => controlAcessibility()} />
        ) : (
          <PersonIcon onClick={() => controlAcessibility()} />
        )}
        <Speech open={openSpeach} onChangeOpen={() => setOpenSpeach(!openSpeach)} />
      </div>
    )
  }
}
