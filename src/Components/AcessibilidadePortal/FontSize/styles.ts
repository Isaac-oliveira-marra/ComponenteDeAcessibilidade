import { styled } from '../../../configs'

export const H1 = styled('h1', {
  fontSize: 'inherit',
})

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: '0.625rem',
  backgroundColor: '$white',
  flexWrap: 'wrap',
})

export const Option = styled('div', {
  border: '0.0625rem solid black',
  padding: '0.3125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
})

export const CustomButton = styled('button', {
  borderRadius: '0.625rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginTop: '1.5%',
})
