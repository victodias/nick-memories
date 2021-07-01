import Slider from 'react-slick'
import styled from 'styled-components'

export const WrapperSlider = styled(Slider)`
  display: flex;
  max-width: 100%;

  .slick-slide {
    div {
      display: flex;
      justify-content: center;
    }
  }
  .slick-slide.slick-active {
    :nth-child(1) {
      :not(.slick-current) {
        border: 1px solid purple;
      }
    }
  }
`
