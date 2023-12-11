import { CustomPicker } from 'react-color'

import { styled } from '../../../configs'

export const PointerStyled = styled(CustomPicker, {
  width: '1.125rem',
  height: '1.125rem',
  borderRadius: '0.9375rem',
  boxShadow: '0rem 0rem 0.625rem white',
  border: '0.125rem solid white',
  backgroundColor: '$base_100',
  position: 'relative',
  top: '-0.3125rem',
})
